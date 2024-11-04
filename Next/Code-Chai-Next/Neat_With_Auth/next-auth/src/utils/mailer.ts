import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

interface sendEmailProps {
    email: string;
    emailType: string;
    userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: sendEmailProps) => {
    try {
        const hashToken = await bcrypt.hash(userId.toString(), 10); // Generate token

        // Update user document based on email type
        if (emailType === "verify") {
            await User.findByIdAndUpdate(userId, {
                $set: { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 }
            });
        } else if (emailType === "reset") {
            await User.findByIdAndUpdate(userId, {
                $set: { forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 3600000 }
            });
        }

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
            port: Number(process.env.SMTP_PORT) || 2525,
            auth: {
                user: process.env.SMTP_USER || "your_smtp_user", // Use env variable
                pass: process.env.SMTP_PASS || "your_smtp_password" // Use env variable
            }
        });

        // Email content
        const mailOptions = {
            from: 'niteshkushwaha1109@gmail.com',
            to: email,
            subject: emailType === "verify" ? "Verify your Email" : "Reset your Password",
            html: `<div>
                      <h1>${emailType === "verify" ? "Verify your email" : "Reset your password"}</h1>
                      <p>Click the link below to ${emailType === "verify" ? "verify your email" : "reset your password"}</p>
                      <a href="${process.env.DOMAIN}/${emailType === "verify" ? "verifyemail" : "resetpassword"}?token=${hashToken}">
                        ${emailType === "verify" ? "Verify Email" : "Reset Password"}
                      </a>
                      <h2>${process.env.DOMAIN}/api/${emailType === "verify" ? "verifyemail" : "resetpassword"}?token=${hashToken}</h2>
                    </div>`,
        };

        // Send the email
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        console.error("Email sending error:", error); // Log the error
        throw new Error(`Failed to send ${emailType} email: ${error.message}`); // Provide context in error
    }
}
