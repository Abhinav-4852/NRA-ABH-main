# Email Backend Setup Guide

## Installation

1. Install dependencies:
```bash
npm install
```

## Environment Variables

The `.env` file is already configured with:
```
MAIL_USER=gaplwebsite@gmail.com
MAIL_PASS=ltjggqnhbxbruzss
MAIL_RECEIVER=akumar222344@gmail.com
PORT=3000
```

**Important:** The `MAIL_PASS` is a Gmail App Password, not your regular Gmail password.

### How to Generate Gmail App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `MAIL_PASS` in `.env`

## Running the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### 1. Contact Form Endpoint
**POST** `/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Inquiry about tour packages",
  "message": "I would like to know more about your tour packages."
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (Error - 500):**
```json
{
  "success": false,
  "message": "Failed to send email",
  "error": "Error details"
}
```

### 2. Quote Request Endpoint
**POST** `/send-quote`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "service": "Shimla Kullu Manali Tour",
  "message": "We are a group of 5 people planning to visit in June 2026."
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Quote request sent successfully"
}
```

**Response (Error - 500):**
```json
{
  "success": false,
  "message": "Failed to send quote request",
  "error": "Error details"
}
```

### 3. Health Check Endpoint
**GET** `/health`

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-03-07T12:00:00.000Z"
}
```

## Frontend Integration

### Using Fetch API:

```javascript
// Contact Form
async function sendContactForm(formData) {
    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        if (data.success) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Quote Request
async function sendQuoteRequest(formData) {
    try {
        const response = await fetch('http://localhost:3000/send-quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        if (data.success) {
            alert('Quote request sent successfully!');
        } else {
            alert('Failed to send quote request');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}
```

## Email Templates

Both endpoints send beautifully formatted HTML emails with:
- Professional styling
- Clear section headers
- Highlighted important information
- Responsive design
- Footer with timestamps

## Security Considerations

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use App Passwords** - Never use your actual Gmail password
3. **Enable CORS carefully** - Currently allows all origins (for development)
4. **Rate limiting** - Consider adding rate limiting for production
5. **Input validation** - All fields are validated before processing

## Troubleshooting

### Email not sending:
- Check if `MAIL_PASS` is a valid App Password (16 characters)
- Ensure 2FA is enabled on Gmail
- Check if Gmail has blocked the login attempt (check Gmail security alerts)
- Verify the Gmail account exists and is active

### Server not starting:
- Ensure port 3000 is not already in use
- Check if all dependencies are installed (`npm install`)
- Verify `.env` file exists and is properly formatted

### CORS errors from frontend:
- Make sure the server is running
- Check if the frontend is making requests to the correct URL
- Verify CORS is enabled in `server.js`

## Production Deployment

For production:
1. Set environment variables on your hosting platform
2. Update CORS to only allow your domain
3. Add rate limiting middleware
4. Use HTTPS
5. Consider using a professional email service (SendGrid, AWS SES, etc.)
6. Add logging and monitoring
