const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 7000;

console.log('🔧 Server.js loaded...');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdfghjkl',  // Current Systems MySQL password
  database: 'canabil_games'
});

connection.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err.stack);
  } else {
    console.log(' Connected to MySQL as id', connection.threadId);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
});

app.get('/', (req, res) => {
  res.send(' API Check!!!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login Details...', { username, password });

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Query error', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length > 0) {
      return res.json({ success: true });
    } else {
      return res.status(401).json({ success: false });
    }
  });
});
