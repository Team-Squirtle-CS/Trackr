const db = require('../models/model');


const userController = {};


userController.userExists = async (req, res, next) => {
  //check if user already exists in the database
  try {
    //extract unique google ID from user and search for a match
    const {googleId} = req.body;
    const value = [googleId];

    const query = `SELECT * FROM users WHERE googleid = $1`;
    const response = await db.query(query, values);

    //assign boolean to res.locals.userExists for next middleware to check
    if (!response.rows.length) {
      res.locals.userExists = false;
    } else {
      res.locals.userExists = true;
    }
    return next();

  } catch (err) {
    res.status(401).send("Failed to check if user exists in database")
    return next(err);
  }
}


userController.addUser = async (req, res, next) => {
  //check result from previous middleware
  if (res.locals.userExists === true) {
    return next();
  }

  try {
    //add user's Google login info to database if not present
    const {email, firstName, lastName, googleId, picture} = req.body;
    const values = [email, firstName, lastName, googleId, picture];

    const query = `
    INSERT INTO users(email, firstname, lastname, googleid, avatar)
    VALUES($1, $2, $3, $4, $5)`;
    
    await db.query(query, values);

    return next();

  } catch (err) {
    res.status(401).send("Failed to add user data")
    return next(err);
  }
}




module.exports = userController;