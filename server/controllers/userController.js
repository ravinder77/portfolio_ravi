import { z } from 'zod';
import User from '../models/userModel.js';
import nodemailer from 'nodemailer';

// FORM VALIDATION with zod
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .trim(),
  email: z.string().email().toLowerCase(),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  message: z.string().min(10, { message: ' At least 10 characters required' }),
});

async function hireMe(req, res) {
  try {
    const result = formSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: result.error.errors,
      });
    }

      const { name, email, phone, companyName, message } = result.data;
      
      const existingUser = await User.findOne({ email });

      if (existingUser) { 
          await existingUser.updateOne({
              email
          }, {
              $push: {
                  messages: {
                      message,
                      date: new Date()

                  }
              }
          })
      } 



          const newSubmission = await User.create({
              name,
              email,
              phone: phone || 'N/A',
              companyName: companyName || 'N/A',
              message
          });
      
         
      
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });


    





 // email to admin
    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: 'New form submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany Name: ${companyName || 'N/A'}\nMessage: ${message}`,
    };


    // confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Form submission confirmation',
      text: `
      Hi ${name},

      Thank you for reaching out to us. We have received your message and will get back to you shortly.

      Here\'s a copy of your submission:
      -----------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      Company Name: ${companyName || 'N/A'}
      Message: ${message}

      Best regards,
      Ravinder
      `,
  };
      
    // send admin email
     transporter.sendMail(adminMailOptions , (error, info) => {
      if (error) {
        console.log("Error sending email to admin: " + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
     });
    
    // send confirmation email
    transporter.sendMail(confirmationMailOptions, (error, info) => {
      if (error) {
        console.log("Error sending confirmation email: " + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

      
       return res.status(200).json({
              success: true,
              message: 'Form submitted successfully',
              data: newSubmission,
          });
      
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
}

export { hireMe };
