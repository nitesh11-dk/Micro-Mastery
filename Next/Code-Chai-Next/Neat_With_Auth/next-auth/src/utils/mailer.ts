import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import  bcrypt  from 'bcryptjs';

interface sendEmailProps{
    email:string
    emailType:string
    userId:string
}

export const sendEmail = async({email:email, emailType,userId}:sendEmailProps)=>{

    
    try {

       const hashToken = await bcrypt.hash(userId.toString(),10)   // will include special character in the token

               if(emailType === "verify"){
                 await User.findByIdAndUpdate(userId,{verifyToken:hashToken ,verifyTokenExpiry:Date.now() + 3600000})
                } else if (emailType === "reset"){
                 await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashToken ,forgotPasswordTokenExpiry:Date.now() + 3600000}) }





        const transporter = nodemailer.createTransport({
           host: "sandbox.smtp.mailtrap.io",
           port: 2525,
           auth: {
             user: "30ba649c32e9fc",//❌
             pass: "3005849726ba6c" //❌
           }
          });

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
                    </div>`,
            };
  const mailResponse = await transporter.sendMail(mailOptions);
      return mailResponse;
          

    } catch (error :any) {
        throw new Error(error.message)
    }
}