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
        user: "test@thebarbershop.bg",
        pass: "f4b24y@)_121",
    }
});

app.post('/api/send-email', upload.array('attachments', 10), (req, res) => {
    const { senderEmail, text, phone, name, surname } = req.body;
    const attachments = req.files;

    const emailContent = `
        Ново съобщение от контактната форма в сайта.
        ИМЕЙЛ: ${senderEmail}
        ИМЕ: ${name}
        ФАМИЛИЯ: ${surname}
        ТЕЛЕФОН: ${phone}
        СЪОБЩЕНИЕ: ${text}
    `;
    
    console.log("\n\n-------------------------------")
    const now = new Date()
    console.log(now.toTimeString() + " " + now.toDateString())
    console.log(emailContent)

    const mailOptions = {
        from: senderEmail,
        replyTo: senderEmail,
        to: 'info@thebarbershop.bg',
        subject: 'Ново съобщение от контактната форма на сайта',
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

const port = 3046;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
