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

// Data to be inserted
const data = {
  name: 'John Doe', // Example name
  age: 30           // Example age
};

// SQL query to insert data
const query = 'INSERT INTO lol2 (name, age) VALUES (?, ?)';

// Execute the query
connection.query(query, [data.name, data.age], (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
    return;
  }
  console.log('Data inserted successfully:', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection:', err);
    return;
  }
  console.log('Connection closed');
});
