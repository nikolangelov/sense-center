const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(express.json()); // Middleware to parse JSON

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const upload = multer({ dest: "./upload" });

const transporter = nodemailer.createTransport({
    host: "uk1009.siteground.eu",
    port: 465,
    secure: true,
    auth: {
        user: "testemail@finecarpetcleaning.co.uk",
        pass: "M1(f6@o8f121",
    }
});

app.post('/api/send-email', upload.array('attachments', 10), (req, res) => {
    const { senderEmail, text, postCode, phone, name, services, howFound, otherText } = req.body;
    const attachments = req.files;

    const emailContent = !phone || phone.length === 0
    ? `
        You have received a new message from your website contact form.
        *𝐒𝐄𝐍𝐃𝐄𝐑:* ${senderEmail}
        *𝐍𝐀𝐌𝐄:* ${name}
        *𝐌𝐄𝐒𝐒𝐀𝐆𝐄:* ${text}
    `
    :
    `
        You have received a new message from your website contact form.
        *𝐒𝐄𝐍𝐃𝐄𝐑:* ${senderEmail}
        *𝐍𝐀𝐌𝐄:* ${name}
        *𝐏𝐎𝐒𝐓 𝐂𝐎𝐃𝐄:* ${postCode}
        *𝐏𝐇𝐎𝐍𝐄:* ${phone}
        *𝐌𝐄𝐒𝐒𝐀𝐆𝐄:* ${text}
        *𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒 𝐑𝐄𝐐𝐔𝐈𝐑𝐄𝐃:*${services ? services.split(', ').join(', ') : 'No services selected'}
        *𝐇𝐎𝐖 𝐃𝐈𝐃 𝐓𝐇𝐄𝐘 𝐅𝐈𝐍𝐃 𝐔𝐒:* ${howFound || 'Not specified'}
        *𝐎𝐓𝐇𝐄𝐑:* ${otherText}
    `
    console.log("\n\n-------------------------------")
    const now = new Date()
    console.log(now.toTimeString() + " " + now.toDateString())
    console.log(emailContent)

    const mailOptions = {
        from: senderEmail,
        replyTo: senderEmail, 
        to: 'office@finecarpetcleaning.co.uk',
        subject: 'New message from contact form',
        text: emailContent,
        attachments: attachments ? attachments.map(file => ({
            filename: file.originalname,
            path: file.path
        })) : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully!');
    });
});

const port = 3045;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
