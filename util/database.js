const mysql = require('mysql2')

const pool= mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blood_details',
    password: 'password'

})
module.exports =pool.promise()