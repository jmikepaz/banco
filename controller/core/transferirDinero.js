const pg = require('../../config/conection')
const sendmail = require('../email/email')
var pdf = require("pdf-creator-node");
var fs = require("fs"); 
var options = { format: 'Letter' };
var html = fs.readFileSync("views/transferencia.handlebars", "utf8"); 

exports.transferirDinero = async function(req, res, next) {  
  let transferir = await pg.func('public.ft_proc_ejecutar_transferencia', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  transferir = transferir[0]["ft_proc_ejecutar_transferencia"]
  try {
    if (transferir) {  
      let datos = {
        name_origin: 'Cesar Pineda',  
            monto:req.body.monto,
            name_destino: 'Juan Paz'  
      }


      var document = {
        html: html,
        data:  datos,
        path: "./output.pdf",
        type: "",
      };
      await pdf.create(document, options)
      sendmail.sendEmailTransferencia('Cesar Pineda', 'cesarpinedacesarpineda@hotmail.com', req.body.monto, 'Juan Paz')
      res.send(transferir)
      
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}