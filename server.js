const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const createTransporter = (email, password) => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });
};

// Route to send email
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message, senderEmail, senderPassword } = req.body;

    // Validation
    if (!name || !email || !message || !senderEmail || !senderPassword) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    try {
        // Create transporter with user-provided credentials
        const transporter = createTransporter(senderEmail, senderPassword);

        // Email options
        const mailOptions = {
            from: `"Portfolio Contact Form" <${senderEmail}>`,
            to: 'wildanbogor92@gmail.com',
            subject: `Portfolio Contact: ${subject || 'New Message'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                    <div style="background: linear-gradient(135deg, #ff6b00 0%, #ff8800 100%); padding: 30px; border-radius: 10px 10px 0 0;">
                        <h2 style="color: white; margin: 0; text-align: center;">🍥 New Portfolio Contact Message</h2>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h3 style="color: #ff6b00; border-bottom: 2px solid #ff6b00; padding-bottom: 10px;">Contact Details</h3>
                        <table style="width: 100%; margin: 20px 0;">
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Name:</td>
                                <td style="padding: 10px 0; color: #666;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                                <td style="padding: 10px 0; color: #666;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; color: #333;">Subject:</td>
                                <td style="padding: 10px 0; color: #666;">${subject || 'No subject'}</td>
                            </tr>
                        </table>
                        <h3 style="color: #ff6b00; border-bottom: 2px solid #ff6b00; padding-bottom: 10px; margin-top: 30px;">Message</h3>
                        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 15px; line-height: 1.6; color: #333;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
                            <p>This email was sent from your portfolio contact form</p>
                            <p>Muhammad Wildan Jasiruddin - Graphic Designer</p>
                        </div>
                    </div>
                </div>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        
        let errorMessage = 'Failed to send email. Please try again.';
        
        if (error.code === 'EAUTH') {
            errorMessage = 'Invalid email or password. Please check your credentials.';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Connection failed. Please check your internet connection.';
        }

        res.status(500).json({
            success: false,
            message: errorMessage,
            error: error.message
        });
    }
});

// Health check route
app.get('/', (req, res) => {
    res.json({ 
        status: 'Server is running',
        message: 'Portfolio Contact Form Backend'
    });
});

app.listen(PORT, () => {
    console.log(`🍥 Server is running on port ${PORT}`);
    console.log(`📧 Email service ready`);
});
