const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.getHistorialMovimiento = async function(req, res, next) {  
  let historial = await pg.func('public.ft_get_historial_transaccion', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  historial = historial[0]["ft_get_historial_transaccion"]
  try {
    if (historial) { 
      res.send(historial)
    }else{
      res.send([])
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}