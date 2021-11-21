const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const emailconf = require('../../config/config')
// initialize nodemailer
var transporter = nodemailer.createTransport(emailconf.email);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
}; 
transporter.use('compile', hbs(handlebarOptions))

exports.sendEmailUserCreate = async function (nombre, correo , usuario, password) {
    var mailOptions = {
        from: '"Notificaciones Starbank" <notificaciones.starbank@gmail.com>', // sender address
        to: correo, // list of receivers
        subject: 'Bienvenida a la plataforma starbank ' + usuario,
        template: 'welcome', // the name of the template file i.e email.handlebars
        context:{
            name: nombre,  
            user:usuario,
            password: password  
        }
    };
    sendmail(mailOptions)
}

exports.sendEmailRecoveryPassword = async function (nombre, correo , usuario, password) {
    var mailOptions = {
        from: '"Notificaciones Starbank" <notificaciones.starbank@gmail.com>', // sender address
        to: correo, // list of receivers
        subject: 'Restablecer contraseña' + usuario,
        template: 'recovery', // the name of the template file i.e email.handlebars
        context:{
            name: nombre,  
            user:usuario,
            password: password  
        }
    };
    sendmail(mailOptions)
}


function sendmail(pmailoptions) {
        // trigger the sending of the E-mail
        transporter.sendMail(pmailoptions, function(error, info){
            if(error){
                console.log(error);
                return {stado: false}
            }
            console.log('Message sent: ' + info.response);
            return JSON.stringify(info)
        });
}