const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'hola-db.cvzfyfl9izgk.ap-northeast-2.rds.amazonaws.com',
    user: 'thdcodud103',
    port: '3306',
    password: 'jenny103',
    database: 'holaDB'
});

module.exports = {
    pool: pool
};