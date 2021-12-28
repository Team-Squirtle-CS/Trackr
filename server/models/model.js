const { Pool } = require('pg');

const PG_URI = ''; //need db setup

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('query executed:', text);
    return pool.query(text, params, callback);
  }
};