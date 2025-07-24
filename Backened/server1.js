require("dotenv").config();
const express = require("express");
// const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5175;


// Middleware
app.use(cors());
app.use(express.json());


// Firebase Admin SDK Initialization for firestore db
// the configuration file with firebase account credentials in the same directory 
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();


// Simulate a connection check for the Firestore database
firestore.collection('students').limit(1).get()
    .then(() => {
        console.log('Firebase db connection successful');
    })
    .catch((err) => {
        console.error('Failed to connect to Firestore database:', err);
    });



// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});



// // MySQL Connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_NAME || "IAR_CELL_MODEL",
//     port: 3306,
// });

// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed:", err);
//         return;
//     }
//     console.log("✅ Connected to MySQL Database");
// });

// OTP store (in-memory)
const otpStore = {}; // { email: { code: '123456', expiresAt: Date } }

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST /send-otp
app.post("/send-otp", async(req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const otp = generateOTP();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    otpStore[email] = { code: otp, expiresAt };

    const mailOptions = {
        from: `"IIT Palakkad Portal" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your OTP for IIT Palakkad Alumni Portal",
        html: `
            <div style="font-family:Arial,sans-serif;padding:20px;">
                <h2>🔐 Your OTP Code</h2>
                <p style="font-size:18px;">
                    Hello,<br><br>
                    Your One-Time Password (OTP) is:
                    <strong style="font-size:24px;">${otp}</strong><br><br>
                    This OTP is valid for <b>5 minutes</b>.<br><br>
                    If you did not request this, please ignore this email.
                </p>
                <hr>
                <p style="font-size:12px;color:gray;">IIT Palakkad Alumni Authentication System</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "OTP sent via email" });
    } catch (err) {
        console.error("❌ Failed to send email:", err);
        res
            .status(500)
            .json({ success: false, message: "Failed to send OTP email" });
    }
});

// POST /verify-otp
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp)
        return res.status(400).json({ error: "Email and OTP are required" });

    const entry = otpStore[email];
    if (!entry)
        return res
            .status(400)
            .json({ success: false, message: "No OTP found for this email" });

    if (Date.now() > entry.expiresAt) {
        delete otpStore[email];
        return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (otp !== entry.code) {
        return res.status(401).json({ success: false, message: "Invalid OTP" });
    }

    delete otpStore[email];
    res.json({ success: true, message: "OTP verified successfully" });
});




app.post('/check-email', async(req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    try {
        const snap = await firestore
            .collection('students')
            .where('Email', '==', email)
            .select() // meta only
            .limit(1).get();
        res.json({ exists: !snap.empty });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/check-duplicate', async (req, res) => {
  const { email, campusID } = req.body;
  if (!email || !campusID)
    return res.status(400).json({ error: 'Email and CampusID are required' });

  try {
    const emailSnap = await firestore
      .collection('students')
      .where('Email', '==', email)
      .limit(1)
      .get();

    const idSnap = await firestore
      .collection('students')
      .where('CampusID', '==', campusID)
      .limit(1)
      .get();

    res.json({
      emailExists: !emailSnap.empty,
      idExists: !idSnap.empty,
    });
  } catch (e) {
    console.error('Error checking duplicates:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//api to fetch user profile by email
app.get('/api/profile/:email', async(req, res) => {
    const email = req.params.email;

    try {
        const snapshot = await firestore
            .collection('students')
            .where('Email', '==', email)
            .limit(1)
            .get();

        if (snapshot.empty) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        const doc = snapshot.docs[0];
        res.json({ id: doc.id, ...doc.data() });
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});


// cache to store dropdown metadata 
const metaCache = { years: null, degrees: null, departments: null, ts: 0 };
const META_TTL = 10 * 60 * 1000; // 10 min

// Function to get dropdown metadata from Firestore (with caching)
async function getMeta() {
    if (Date.now() - metaCache.ts < META_TTL && metaCache.years) return metaCache;
    const doc = await firestore.doc('metadata/dropdowns').get();
    Object.assign(metaCache, doc.data(), { ts: Date.now() });
    return metaCache;
}



// API to get dropdown options
app.get('/passout-years', async(_, res) => {
    try {
        const { years } = await getMeta();
        res.json(years.map(y => ({ YearOfPassOut: y })));
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/degrees', async(_, res) => {
    try {
        const { degrees } = await getMeta();
        res.json(degrees.map(d => ({ Degree: d })));
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/departments', async(_, res) => {
    try {
        const { departments } = await getMeta();
        res.json(departments.map(d => ({ Deparment: d })));
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//API to Get Alumni Data with Filters
//Filters: name, campusID, yearOfPassOut, degree, department
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


// PATCH /api/profile/:email  ->  Update only verified field
app.patch('/api/profile/:email', async (req, res) => {
  const email = req.params.email;
  const { verified } = req.body;

  if (typeof verified !== 'boolean') {
    return res.status(400).json({ error: 'Invalid request: verified must be boolean' });
  }

  try {
    const snapshot = await firestore
      .collection('students')
      .where('Email', '==', email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    const docRef = snapshot.docs[0].ref;

    await docRef.update({ verified });

    res.json({ success: true, message: `Verified field updated to ${verified}` });
  } catch (err) {
    console.error('Error updating verified field:', err);
    res.status(500).json({ error: 'Failed to update verification status' });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});