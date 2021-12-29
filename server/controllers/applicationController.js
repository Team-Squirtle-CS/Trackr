const db = require('../models/model');

const applicationController = {};


applicationController.getUserApplications = async (req, res, next) => {
  //retrieves all applications from the database for current user
  try {
    const {userID} = req.query;
    const values = [userID];
    const query = `SELECT * FROM applications WHERE user_id = $1`;

    const response = await db.query(query, values);
    if (response.rows.length) {
      res.locals.applications = response.rows;
      return next();
    } else {
      throw err;
    }
  } catch (err) {
    res.status(401).send("Failed to get user's applications");
    return next(err);
  }
}


applicationController.addApplication = async (req, res, next) => {
  try {
    //extract information to be added to database
    const {company, description, location, salary, status, userID} = req.body;
    const values = [company, description, location, salary, status, userID];

    const query = `
    INSERT INTO applications(company, description, location, salary, status, user_id)
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const response = await db.query(query, values);

    if (response.rows.length) {
      const created = response.rows[0];
      res.locals.newApp = created;
      return next()
    } else {
      throw err;
    }
  } catch (err) {
    res.status(401).send("Failed to create new application")
    return next(err);
  }
}

applicationController.editApplication = async (req, res, next) => {
  try {
    const {company, description, location, salary, status, userID} = req.body;
    const values = [company, description, location, salary, status, userID];

    const query = `
    UPDATE applications 
    SET
    company = $1,
    description = $2,
    location = $3,
    salary = $4,
    status = $5
    WHERE user_id = $6
    RETURNING *`;
    const response = await db.query(query, values);

    if (response.rows.length) {
      const edited = response.rows[0];
      res.locals.editedApp = edited;
      return next()
    } else {
      throw err;
    }
  } catch (err) {
    res.status(404).send("Failed to update application")
    return next(err);
  }
}

applicationController.deleteApplication = async (req, res, next) => {
  try {
    //extract id of application to be deleted
    const {appID} = req.body;
    const values = [appID];

    const query = `
    DELETE FROM applications
    WHERE _id = $1
    RETURNING *`;
    const response = await db.query(query, values);

    if (response.rows.length) {
      const deleted = response.rows[0];
      res.locals.deletedApp = deleted;
      console.log("deleted App", res.locals.deletedApp);
      return next();
    } else {
      throw err;
    }
  } catch (err) {
    res.send("Failed to delete application")
    return next(err);
  }
}


module.exports = applicationController;