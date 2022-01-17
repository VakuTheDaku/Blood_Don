const mysql = require('mysql2')

const pool= mysql.createPool({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b5e4294f3aef51',
    database: 'heroku_3caabb8df55adbb',
    password: '4a8d7be3'

})
module.exports =pool.promise()
