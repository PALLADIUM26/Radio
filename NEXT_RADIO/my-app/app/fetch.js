const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',      // Replace with your MySQL host
  user: 'root',   // Replace with your MySQL username
  password: 'pruuuth', // Replace with your MySQL password
  database: 'db' // Replace with your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Example query
connection.query('SELECT * FROM lol', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection:', err);
    return;
  }
  console.log('Connection closed');
});
