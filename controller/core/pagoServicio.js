const pg = require('../../config/conection')
const sendmail = require('../email/email')
var pdf = require("pdf-creator-node");
var fs = require("fs"); 
var options = { format: 'Letter' };
var html = fs.readFileSync("views/servicio.handlebars", "utf8"); 
const whatsapp = require('../core/whatsapp')
exports.pagoServicio = async function(req, res, next) {  
  let servicio  = await pg.func('public.ft_proc_pago_servicio', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  servicio  = servicio [0]["ft_proc_pago_servicio"]
  try {
    if (servicio ) { 
      console.log(servicio);
      if (servicio.estado) { 
          let datos = {
            name: servicio.nombre,  
            monto:servicio.monto, 
            mensaje:'Gracias por utilizar los servicios de STAR BANK, Te notificamos el pago realizado de: '+ servicio.descripcion ,
            servicio:servicio.descripcion
          }
        if (servicio.telefono) {
          whatsapp.sendWhatsappTextMessage(servicio.telefono , datos.mensaje + ` Por un monto de: *${servicio.monto}*` )
        }

        var document = {
          html: html,
          data:  datos,
          path: "./output.pdf",
          type: "",
        };
        await pdf.create(document, options)
        sendmail.sendEmailPagoServicio(datos.mensaje, servicio.email, datos.monto, datos.servicio, servicio.nombre)
  
         
      }
      res.send(servicio )
    }
  } catch (error) {
    console.log(error);
     res.send({error:true , mesage:error})
  }
 
}