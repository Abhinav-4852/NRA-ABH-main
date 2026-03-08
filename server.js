import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Solanki Tours Email API',
            version: '1.0.0',
            description: 'API for sending contact form and quote request emails for Solanki Tours website',
            contact: {
                name: 'Solanki Tours',
                email: 'akumar222344@gmail.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Development server'
            }
        ],
        tags: [
            {
                name: 'Email',
                description: 'Email sending endpoints'
            },
            {
                name: 'Health',
                description: 'Health check endpoint'
            }
        ]
    },
    apis: ['./server.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Solanki Tours API Docs'
}));

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

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Send contact form email
 *     description: Receives contact form submissions and sends them via email to the business
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - subject
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 description: Customer's full name
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Customer's email address
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 description: Customer's phone number
 *                 example: +91-9876543210
 *               subject:
 *                 type: string
 *                 description: Subject of the inquiry
 *                 example: Inquiry about tour packages
 *               message:
 *                 type: string
 *                 description: Detailed message from the customer
 *                 example: I would like to know more about your Kashmir tour packages
 *     responses:
 *       200:
 *         description: Email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Email sent successfully
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: All fields are required
 *       500:
 *         description: Server error or email sending failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Failed to send email
 *                 error:
 *                   type: string
 *                   example: SMTP connection error
 */
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

/**
 * @swagger
 * /send-quote:
 *   post:
 *     summary: Send quote request email
 *     description: Receives quote request submissions from the "Plan Your Dream Tour" form and sends them via email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - date
 *               - adults
 *               - comments
 *             properties:
 *               name:
 *                 type: string
 *                 description: Customer's full name
 *                 example: Jane Smith
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Customer's email address
 *                 example: jane@example.com
 *               phone:
 *                 type: string
 *                 description: Customer's phone number
 *                 example: +91-9988776655
 *               date:
 *                 type: string
 *                 format: date
 *                 description: Preferred travel date
 *                 example: 2026-06-15
 *               adults:
 *                 type: integer
 *                 description: Number of adults
 *                 minimum: 1
 *                 maximum: 7
 *                 example: 4
 *               kids:
 *                 type: integer
 *                 description: Number of kids
 *                 minimum: 0
 *                 maximum: 7
 *                 example: 2
 *               comments:
 *                 type: string
 *                 description: Additional travel plans and requirements
 *                 example: We want to visit Shimla and Manali with hotel stays included
 *     responses:
 *       200:
 *         description: Quote request sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Quote request sent successfully
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: All fields are required
 *       500:
 *         description: Server error or email sending failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Failed to send quote request
 *                 error:
 *                   type: string
 *                   example: SMTP connection error
 */
// Route: Quote Request
app.post('/send-quote', async (req, res) => {
    const { name, email, phone, date, adults, kids, comments } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !adults || !comments) {
        return res.status(400).json({
            success: false,
            message: 'All required fields must be filled'
        });
    }

    const totalGuests = parseInt(adults) + (parseInt(kids) || 0);
    const service = 'Custom Tour Package Request';

    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER,
        subject: `New Tour Enquiry - ${totalGuests} Guest${totalGuests > 1 ? 's' : ''} - ${date}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; border-bottom: 3px solid #FF9800; padding-bottom: 10px;">🌍 New Tour Enquiry</h2>
                    
                    <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #FF9800; margin-top: 0; font-size: 18px;">📅 Travel Details</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #555; width: 40%;"><strong>Travel Date:</strong></td>
                                <td style="padding: 8px 0; color: #333;">${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #555;"><strong>Adults:</strong></td>
                                <td style="padding: 8px 0; color: #333;">${adults}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #555;"><strong>Kids:</strong></td>
                                <td style="padding: 8px 0; color: #333;">${kids || 0}</td>
                            </tr>
                            <tr style="background-color: #ffe0b2;">
                                <td style="padding: 8px 0; color: #555;"><strong>Total Guests:</strong></td>
                                <td style="padding: 8px 0; color: #FF9800; font-weight: bold; font-size: 16px;">${totalGuests}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0; font-size: 18px;">👤 Customer Information</h3>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #FF9800; text-decoration: none;">${email}</a></p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <a href="tel:${phone}" style="color: #FF9800; text-decoration: none;">${phone}</a></p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #FF9800; border-radius: 5px;">
                        <h3 style="color: #333; margin-top: 0;">💬 Additional Requirements</h3>
                        <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${comments}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e9; border-radius: 5px; text-align: center;">
                        <p style="margin: 0; color: #2e7d32; font-weight: bold;">⚡ Action Required: Respond within 24 hours</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px;">
                        <p>This enquiry was submitted from Solanki Tours website</p>
                        <p style="margin: 5px 0;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
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

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Check if the server is running and responsive
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Server is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: 2026-03-08T10:30:00.000Z
 */
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
    console.log(`📧 Email service configured with: ${process.env.MAIL_USER}`);
    console.log(`📬 Emails will be sent to: ${process.env.MAIL_RECEIVER}`);
    console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`);
});
