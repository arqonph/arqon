
import nodemailer from 'nodemailer'

export default async function handler(req, res ) {
    var dotenv = require('dotenv')
    dotenv.config()

    const { name, email, number, message } = req.body

    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            },
        })

        const msg = await transporter.sendMail({
            from: email,
            to: 'marjay.g.flores@gmail.com',
            subject: 'Sample message enquiry',
            html: `<p>Hi ARQON Team <br><br>
            ${message}<br><br>
            <strong>Thank you! </strong><br><br>
                Name: ${name}<br>
                Email: ${email}<br>
                Phone Number: ${number}<br>`,
        })
        return res.status(200).json('Succesfully send your message')
    }catch(error){
       res.status(400).json({ 
          message: 'Something went wrong :' + error
        })
    }
   
}