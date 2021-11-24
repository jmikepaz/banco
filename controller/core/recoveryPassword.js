const pg = require('../../config/conection')
const sendmail = require('../email/email')  
var fs = require("fs"); 
//var pdf = require('html-pdf');
var pdf = require("pdf-creator-node");
//var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };
var html = fs.readFileSync("views/welcome.handlebars", "utf8"); 


exports.recoveryPassword = async function(req, res, next) {  
  let recovery = await pg.func('public.ft_proc_recovery_account', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  recovery = recovery[0]["ft_proc_recovery_account"]
  try {
    // Read HTML Template
   
    if (recovery) {
      // pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
      //   if (err) return console.log(err);
      //   console.log(res); // { filename: '/app/businesscard.pdf' }
      // });
      let datos = {
        name: 'nombre',  
            user:'usuario',
            password: 'password'  
      }
      var document = {
        html: html,
        data:  datos,
        path: "./output.pdf",
        type: "",
      };

      pdf.create(document, options)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });

      //if (recovery.estado) {
       // sendmail.sendEmailRecoveryPassword(recovery.nombre , recovery.email, recovery.usuario, recovery.password)
      //}
      res.send(recovery)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}