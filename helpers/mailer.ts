import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";


export const sendEmail = async({email, emailType, userId}: any) => {
    try {
       const hashedToken = await bcryptjs.hash(userId.toString(), 10)


       if(emailType === "VERIFY") {
       await User.findByIdAndUpdate(userId, 
        {
            verifyToken: hashedToken,
            verifyTokenExpiry: Date.now() + 3600000
        })
    } else if(emailType === "RESET") {
        await User.findByIdAndUpdate(userId, 
            {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
    }   

    
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "dc8121c9534367",
              pass: "8133d58a75b44e"
            }
          });


          const mailOpetions = {
            from: "thanuramesh22@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email": "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/auth/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/auth/verifyemail?token=${hashedToken}
            </p>`
          }

        const mailresponse =  await transport.sendMail(mailOpetions);
          return mailresponse;

    } catch (error: any) {
        throw new Error(error.message);
    }
}