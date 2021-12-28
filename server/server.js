const express = require('express');
const app = express();
const path = require('path');

const userRouter = require('./routes/users');
const applicationRouter = require('./routes/applications');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/applications', applicationRouter);

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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;  