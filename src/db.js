const Pool = require('pg').Pool
const creds = require('../creds/creds')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }

})

module.exports = pool