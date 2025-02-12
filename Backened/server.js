require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5175;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'IAR_CELL_MODEL'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// API to Check if Email Exists
app.post('/check-email', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const query = 'SELECT * FROM email WHERE E_mail = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ exists: results.length > 0 });
    });
});

// API to Fetch Unique Passout Years
app.get('/passout-years', (req, res) => {
    const query = 'SELECT DISTINCT YearOfPassOut FROM year_2024 ORDER BY YearOfPassOut DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching passout years:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API to Fetch Unique Degrees
app.get('/degrees', (req, res) => {
    const query = 'SELECT DISTINCT Degree FROM year_2024 ORDER BY Degree';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching degrees:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API to Fetch Unique Departments
app.get('/departments', (req, res) => {
    const query = 'SELECT DISTINCT Deparment FROM year_2024 ORDER BY  Deparment';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API to Fetch Alumni Based on Filters
app.get('/alumni', (req, res) => {
    const { name, campusID, yearOfPassOut, degree, department } = req.query;
    let query = 'SELECT * FROM year_2024 WHERE 1=1';
    let queryParams = [];

    if (name && name.trim() !== '') {
        query += ' AND Name LIKE ?';
        queryParams.push(`%${name}%`);
    }
    if (campusID && campusID.trim() !== '') {
        query += ' AND CampusID = ?';
        queryParams.push(campusID);
    }
    if (yearOfPassOut) {
        query += ' AND YearOfPassOut = ?';
        queryParams.push(yearOfPassOut);
    }
    if (degree) {
        query += ' AND Degree = ?';
        queryParams.push(degree);
    }
    if (department) {
        query += ' AND Deparment = ?';
        queryParams.push(department);
    }

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error fetching alumni:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log("Fetched alumni data:", results); // 🔹 Debugging
        res.json(Array.isArray(results) ? results : []);
    });
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});