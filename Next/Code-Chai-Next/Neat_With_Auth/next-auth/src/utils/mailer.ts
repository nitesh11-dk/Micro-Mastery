import nodemailer from 'nodemailer';

interface sendEmailProps{
    email:string
    emailType:string
    userId:string
}

export const sendEmail = async({email:email, emailType,userId}:sendEmailProps)=>{

    
    try {

        //TODO:
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "niteshkushwaha1109.email",
              pass: "Nitesh@1109",
            },
          });

          const mailOptions = {
              from: ' <maddison53@ethereal.email>',
              to: email, 
              subject: emailType === "verify" ? "Verify your Email" : "Reset your Password", 
              html: "<b>Hello world?</b>", 
            };
  const mailResponse = await transporter.sendMail(mailOptions);
      return mailResponse;
          

    } catch (error :any) {
        throw new Error(error.message)
    }
}