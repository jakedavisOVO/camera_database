const Pool = require('pg').Pool
const creds = require('../creds/creds')

const pool = new Pool({
    user: creds.user,
    host: creds.host,
    database: creds.database,
    password: creds.password,
    port: creds.port

})

module.exports = pool