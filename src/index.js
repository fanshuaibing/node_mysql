const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
});

connection.connect();


connection.query('CREATE DATABASE IF NOT EXISTS fan DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci',
  function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
connection.query("use fan")
connection.query(`CREATE TABLE IF NOT EXISTS user(
  name text, 
  age int
  )`,
  function (error, results, fields) {
    if (error) throw error;
    console.log('创建表 ', results);
  });
connection.end();
