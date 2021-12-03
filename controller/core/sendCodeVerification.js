const pg = require('../../config/conection')
const sendmail = require('../email/email')  
var fs = require("fs");  
var pdf = require("pdf-creator-node"); 
var options = { format: 'Letter' };
var html = fs.readFileSync("views/welcome.handlebars", "utf8"); 
const whatsapp = require('../core/whatsapp')
 
exports.sendCodeVerification = async function(req, res, next) {  
  var number = getRandomInt(1990, 9999) 
  const verificationCode = Math.round( number.toString().padStart(4, "0") );
 
  try { 
      if (req.body.telefono) {
        whatsapp.sendWhatsappTextMessage(req.body.telefono , `Te saludadmos de Starbank, Gracias por utilizar nuestros servicios.  Te compartimos el siguiente codigo de validacion: *${verificationCode}*`)
      }
      await sendmail.sendEmailCode(req.body.email , verificationCode ) 
      res.send({code:verificationCode}) 
    
  } catch (error) {
     res.send({error:true , mesage:error})
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
