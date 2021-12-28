const express = require('express');
const app = express();
const path = require('path');
// not sure if jwt is needed 
//const jwt = require('jsonwebtoken');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/users');
const applicationRouter = require('./routes/applications');

app.use('/users', userRouter);
app.use('/applications', applicationRouter);



// ---flow test to see all incoming requests---
app.use('/', (req, res, next) => {
  console.log(`**** FLOW TEST ****
    Method: ${req.method}
    url: ${req.url}
    body: ${JSON.stringify(req.body)}`);
  next();
});


app.get('/',
  (req, res) => {
    res.status(200).json('hello world');
  }
);
 
app.get('/bundle.js',
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
  }
);
// route for signin
app.get('/login', (req, res) => {
  return res.json(res.locals);
});

// route for sign-up
app.post('/signup', (req, res) => {
  return res.status(201).json(res.locals);
});




// catch-all route handler for any requests to an unknown route 
app.use((req, res) => {
  res.statusCode = 404;
  res.send(`Catch-all route handler: Error code ${res.statusCode} sorry`);
});

// express global handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = {};
  Object.assign(errorObj, defaultErr);
  console.log(errorObj);
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


console.log("ssss");
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;  
