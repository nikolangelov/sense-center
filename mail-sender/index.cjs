const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');

const cors = require('cors');



// Initialize the Express app
const app = express();
app.use(cors({
    origin: '*', // Replace with your allowed origin(s)
  }));
// Configure body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const upload = multer({dest: "./upload"});

// Set up the transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "mail.finecarpetcleaning.co.uk",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "testemail@finecarpetcleaning.co.uk",
      pass: "M1(f6@o8f121",
    }
});

// Route to handle form submissions with multiple file uploads
app.post('/send-email', upload.array('attachments', 10), (req, res) => {
    const { senderEmail, subject, text } = req.body;
    const attachments = req.files;

    // Create the email body with form content
    const emailContent = `
        You have received a new message from your website contact form.
        
        Sender: ${senderEmail}
        Subject: ${subject}

        Message:
        ${text}
    `;
    ;

    // Setup email options
    const mailOptions = {
        from: 'office@finecarpetcleaning.co.uk', // Sender's email address
        to: 'office@finecarpetcleaning.co.uk', // Your email address
        subject: subject, // Subject line
        text: emailContent, // Email body with form content
        attachments: attachments.map(file => ({
            filename: file.originalname,
            path: file.path
        }))
    };

    // Send email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500);
        }
        console.log('Email sent: ' + info.response);
        res.sendStatus(200);
    });
});

// Serve the HTML form for testing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const port = 3015;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});