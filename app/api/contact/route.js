import { NextResponse } from "next/server";
import nodemailer from "nodemailer";




export async function POST(request, Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // ✅ Configure your SMTP (use your email credentials)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your provider's SMTP
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // from .env
        pass: process.env.SMTP_PASS, // from .env
      },
    });

    // ✅ Define email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER, // your email where you receive messages
      subject: `New Contact Form Submission from ${firstName}`,
      text: `
You received a new message from your website:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." });
  }
}
