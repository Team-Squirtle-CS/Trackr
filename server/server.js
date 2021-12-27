const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

console.log("ssss");
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;  