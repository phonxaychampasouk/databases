var mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


