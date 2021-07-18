const Pool = require('pg').Pool
const creds = require('../creds/creds')

const pool = new Pool({
    user: "novjrmozfhfpuj",
    host: "ec2-54-220-53-223.eu-west-1.compute.amazonaws.com",
    database: "ddr8f9r4oj9g7b",
    password: "055073e871236ffe9cae9de1af8ad3068d66c64ad6c0dfe6c813b1640239aa63",
    port: 5432

})

module.exports = pool