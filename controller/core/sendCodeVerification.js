const pg = require('../../config/conection')
const sendmail = require('../email/email')  
var fs = require("fs"); 
//var pdf = require('html-pdf');
var pdf = require("pdf-creator-node");
//var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };
var html = fs.readFileSync("views/welcome.handlebars", "utf8"); 
const crypto = require("crypto");

exports.sendCodeVerification = async function(req, res, next) {  
  const number = crypto.randomInt(0, 10000);
  const verificationCode = Math.round( number.toString().padStart(4, "0") );
 
  try { 
      await sendmail.sendEmailCode(req.body.email , verificationCode ) 
      res.send({code:verificationCode}) 
    
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}