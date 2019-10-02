const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config');
require('dotenv').config();

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,

    auth: {
      user: creds.USER,
      pass: creds.PASS
    },
  
    
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

router.post('/send', (req,res,next) =>{
    const fullName = req.body.fullName;
    const email = req.body.email;
    const subj = req.body.subj;
    const message = req.body.message;
    const content = `Name: ${fullName} \n Email: ${email} \n Sujet: ${subj} \n Message: ${message}`


    const mail = {
        from: fullName,
        to:process.env.MAIL,
        subject:'Nouveau message de ' + email,
        text:content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
})

module.exports = router;