const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.pagoServicio = async function(req, res, next) {  
  let historial = await pg.func('public.ft_proc_pago_servicio', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  historial = historial[0]["ft_proc_pago_servicio"]
  try {
    if (historial) { 
      res.send(historial)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}