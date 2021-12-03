const pg = require('../../config/conection')
const sendmail = require('../email/email')
var pdf = require("pdf-creator-node");
var fs = require("fs"); 
var options = { format: 'Letter' };
var html = fs.readFileSync("views/transferencia.handlebars", "utf8"); 
const whatsapp = require('../core/whatsapp')
exports.transferirDinero = async function(req, res, next) {  
  let transferir = await pg.func('public.ft_proc_ejecutar_transferencia', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  transferir = transferir[0]["ft_proc_ejecutar_transferencia"]
  try {
    if (transferir) { 

      if (transferir.estado) {
        let datos = {
          name_origin: transferir.nombre_origen,  
          monto:req.body.monto,
          name_destino: transferir.nombre_destino ,
          transaccion:transferir.numero_transaccion,
          mensaje:'Te notificamos que se ha realizado una transferecia con los siguientes detalles: '

        }
      var document = {
        html: html,
        data:  datos,
        path: "./output.pdf",
        type: "",
      };
      await pdf.create(document, options)

      if (transferir.telefono_origen) {
        let mensaje = `Un saludo desde Starbank \nTe notificamos que se ha realizado una transferecia con los siguientes detalles: \nMonto: *${transferir.monto}* \nTrasferido a: *${transferir.nombre_destino}* \n#Transaccion: *${transferir.numero_transaccion}*`
        whatsapp.sendWhatsappTextMessage(transferir.telefono_origen ,mensaje)
      }

      if (transferir.telefono_destino) {
        let mensaje = `Un saludo desde Starbank \nTe notificamos que se ha acreditado a su cuenta los siguientes detalles: \nMonto: *${transferir.monto}* \nTrasferido de: *${transferir.nombre_origen}* \n#Transaccion: *${transferir.numero_transaccion}*`
        whatsapp.sendWhatsappTextMessage(transferir.telefono_destino ,mensaje)
      }
      
      if (transferir.telefono_origen) {
        let mensaje = `Te notificamos que se ha realizado una transferecia con los siguientes detalles: \n
                       Monto: *${transferir.monto}* \n
                       Trasferido a: *${transferir.nombre_destino}* \n
                       #Transaccion: *${transferir.numero_transaccion}*`
        whatsapp.sendWhatsappTextMessage(transferir.telefono ,mensaje)
      }

      sendmail.sendEmailTransferencia(transferir.nombre_origen, 
                                      transferir.email_origen, 
                                      req.body.monto, 
                                      transferir.nombre_destino,
                                      transferir.numero_transaccion,
                                      'Te notificamos que se ha realizado una transferecia con los siguientes detalles: '
                                      )
      sendmail.sendEmailTransferencia(transferir.nombre_destino, 
                                      transferir.email_destino, 
                                      req.body.monto, 
                                      transferir.nombre_destino,
                                      transferir.numero_transaccion,
                                      'Te notificamos que se ha realizado una transferecia con los siguientes detalles: '
                                      )

      } 


      
      res.send(transferir)
      
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}