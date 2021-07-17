const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PSWD,
    database: dbConfig.DB_NAME
});

//open the MySQL connection
connection.connect((error:any) => {
    if (error) throw error;
    console.log('Successfully connected to the database');
});

module.exports = connection;