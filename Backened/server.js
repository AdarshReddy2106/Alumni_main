require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5175;

// Firebase Admin SDK Initialization for firestore db
// the configuration file with firebase account credentials in the same directory 
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();


// Middleware
app.use(cors());
app.use(express.json());


// Simulate a connection check for the Firestore database
firestore.collection('students').limit(1).get()
    .then(() => {
        console.log('Firebase db connection successful');
    })
    .catch((err) => {
        console.error('Failed to connect to Firestore database:', err);
    });

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'IAR_CELL_MODEL',
    port: 3306,
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



// API to Get unique Passout Years, Degrees, and Departments
// to populate the filter dropdowns ui

app.get('/passout-years', async(req, res) => {
    try {
        const snapshot = await firestore.collection('students').get();
        const yearsSet = new Set();

        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.YearOfPassOut) {
                yearsSet.add(data.YearOfPassOut);
            }
        });

        const years = Array.from(yearsSet).sort((a, b) => b - a); // Descending
        res.json(years.map((y) => ({ YearOfPassOut: y })));
    } catch (error) {
        console.error('Error fetching passout years:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/degrees', async(req, res) => {
    try {
        const snapshot = await firestore.collection('students').get();
        const degreeSet = new Set();

        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.Degree) {
                degreeSet.add(data.Degree);
            }
        });

        const degrees = Array.from(degreeSet).sort();
        res.json(degrees.map((d) => ({ Degree: d })));
    } catch (error) {
        console.error('Error fetching degrees:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/departments', async(req, res) => {
    try {
        const snapshot = await firestore.collection('students').get();
        const deptSet = new Set();

        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.Deparment) {
                deptSet.add(data.Deparment);
            }
        });

        const departments = Array.from(deptSet).sort();
        res.json(departments.map((d) => ({ Deparment: d })));
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// API to Get Alumni Data with Filters
// Filters: name, campusID, yearOfPassOut, degree, department
app.get('/alumni', async(req, res) => {
    try {
        const { name, campusID, yearOfPassOut, degree, department } = req.query;

        let query = firestore.collection('students');

        if (campusID) {
            query = query.where('CampusID', '==', campusID);
        }
        if (yearOfPassOut) {
            query = query.where('YearOfPassOut', '==', yearOfPassOut);
        }
        if (degree) {
            query = query.where('Degree', '==', degree);
        }
        if (department) {
            query = query.where('Deparment', '==', department);
        }

        const snapshot = await query.get();

        let results = [];

        snapshot.forEach((doc) => {
            const data = doc.data();
            if (name) {
                if (data.Name && data.Name.toLowerCase().includes(name.toLowerCase())) {
                    results.push({ id: doc.id, ...data });
                }
            } else {
                results.push({ id: doc.id, ...data });
            }
        });

        res.json(results);
    } catch (error) {
        console.error('Error fetching alumni:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});