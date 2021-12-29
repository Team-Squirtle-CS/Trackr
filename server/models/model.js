const { Pool } = require('pg');

const PG_URI = 'postgres://yarwzexk:9Sx_LYIDc035wQzlV97rSxh6COomDpue@castor.db.elephantsql.com/yarwzexk'; 

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('query executed:', text);
    return pool.query(text, params, callback);
  }
};