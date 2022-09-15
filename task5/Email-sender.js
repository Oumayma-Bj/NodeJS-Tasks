var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'oumayma.b.j12@gmail.com',
        pass: ''
    }
});

var mailOptions ={
    from: 'oumayma.b.j12@gmail.com',
    to: 'oumayma.b.j12@gmail.com',
    subject: 'nodeJS test',
    text: `I am testing the NodeJS checkpoint`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error)
    } else {
        console.log('Email sent: '+ info.response);
    }
});