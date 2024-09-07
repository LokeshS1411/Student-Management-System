const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // use your MySQL username
  password: 'root', // use your MySQL password
  database: 'studentdb'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create Student (POST)
app.post('/students', (req, res) => {
  const { rollNo, name, age, std, gender, phone, email } = req.body;
  const query = 'INSERT INTO students (rollNo, name, age, std, gender, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [rollNo, name, age, std, gender, phone, email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Student added successfully!');
  });
});

// Read Students (GET)
app.get('/students', (req, res) => {
  const query = 'SELECT * FROM students';
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Update Student (PUT)
app.patch('/students/:rollNo', (req, res) => {
  const rollNo = req.params.rollNo;
  const { name, age, std, gender, phone, email } = req.body;
  const query = 'UPDATE students SET name = ?, age = ?, std = ?, gender = ?, phone = ?, email = ? WHERE rollNo = ?';
  
  db.query(query, [name, age, std, gender, phone, email, rollNo], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Student updated successfully!');
  });
});

// Delete Student (DELETE)
app.delete('/students/:rollNo', (req, res) => {
  const rollNo = req.params.rollNo;
  const query = 'DELETE FROM students WHERE rollNo = ?';
  
  db.query(query, [rollNo], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Student deleted successfully!');
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
