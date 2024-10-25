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
    host: "mail.finecarpetcleaning.co.uk",
    port: 465,
    secure: true,
    auth: {
        user: "testemail@finecarpetcleaning.co.uk",
        pass: "M1(f6@o8f121",
    }
});

app.post('/api/send-email', (req, res) => {
    const { senderEmail, text, postCode, phone, name, services, howFound, howFoundOther } = req.body;
    const attachments = req.files;
  
    const howFoundText = howFound === 'Other' ? `Other - ${howFoundOther || 'Not specified'}` : howFound || 'Not specified';
  
    const emailContent = phone && phone.length > 0
      ? `You have received a new message from your website contact form.
  
      Sender: ${senderEmail}
      Name: ${name}
      Post code: ${postCode}
      Phone: ${phone}
      Message: ${text}
  
      Services Required:
      ${services ? services.split(', ').join('\n') : 'No services selected'}
  
      How did they find us: ${howFoundText}`
      
      : `You have received a new message from your website contact form.
  
      Sender: ${senderEmail}
      Name: ${name}
      Message: ${text}`;

    console.log("\n\n-------------------------------")
    const now = new Date()
    console.log(now.toTimeString() + " " + now.toDateString())
    console.log(emailContent)

    const mailOptions = { 
        from: 'office@finecarpetcleaning.co.uk',
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
