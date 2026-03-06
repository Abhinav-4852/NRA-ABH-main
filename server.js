import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('Error with email configuration:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Route: Contact Form
app.post('/contact', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER,
        subject: `Contact Form - ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> ${phone}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #4CAF50; border-radius: 5px;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="color: #666; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
                        <p>This email was sent from the contact form on your website.</p>
                    </div>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully');
        res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });
    } catch (error) {
        console.error('Error sending contact form email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

// Route: Quote Request
app.post('/send-quote', async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER,
        subject: `New Quote Request - ${service}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; border-bottom: 3px solid #FF9800; padding-bottom: 10px;">New Quote Request</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #555;">Customer Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #FF9800; text-decoration: none;">${email}</a></p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> ${phone}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Service Requested:</strong> <span style="color: #FF9800; font-weight: bold;">${service}</span></p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 20px; background-color: #fff3e0; border-left: 4px solid #FF9800; border-radius: 5px;">
                        <h3 style="color: #333; margin-top: 0;">Quote Details:</h3>
                        <p style="color: #666; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
                        <p>This quote request was submitted from your website.</p>
                        <p>Please respond to the customer within 24 hours.</p>
                    </div>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Quote request email sent successfully');
        res.status(200).json({
            success: true,
            message: 'Quote request sent successfully'
        });
    } catch (error) {
        console.error('Error sending quote request email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send quote request',
            error: error.message
        });
    }
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Email service configured with: ${process.env.MAIL_USER}`);
    console.log(`Emails will be sent to: ${process.env.MAIL_RECEIVER}`);
});
