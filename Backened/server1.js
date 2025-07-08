require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5175;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "IAR_CELL_MODEL",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL Database");
});

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

// Check if email exists
app.post("/check-email", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const query = "SELECT * FROM email WHERE E_mail = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({ exists: results.length > 0 });
    });
});

// GET /api/profile/:email - fetch user profile by email
app.get("/api/profile/:email", (req, res) => {
    const email = req.params.email;
    const query = "SELECT * FROM alumni_profiles WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error("Error fetching profile:", err);
            return res.status(500).json({ error: "Failed to fetch profile" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Profile not found" });
        }
        res.json(results[0]);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});