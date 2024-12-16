const mailrouter = require('express').Router();
const nodemailer = require('nodemailer');


mailrouter.post('/', (req, res) => {
    const { email, name, Subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'billanivash52@gmail.com',
            pass: 'pdwztlfkgtwngutc'
        }
    });
    const html = `<p>Mail from ${email}</p>
    <p>Hi,I am ${name}</p>
    <p>${message}</p>
    `

    const mailoption = {
        from:{email},
        to: "billanivash52@gmail.com",
        subject:`${Subject}`,
        html:html
    }

    transporter.sendMail(mailoption, (err,info) => {
        if (err)
        {
            console.log(err)
        }
        else {
            console.log(info.response)
        }
    })
    res.status(200).send({
        message:"Message send Sucessfully... "
    })

    

})

module.exports = mailrouter;