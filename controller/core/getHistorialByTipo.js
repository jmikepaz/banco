const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.getHistorialByTipo = async function(req, res, next) {  
  let historial = await pg.func('public.ft_get_historial_transaccion_by_tipo', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  historial = historial[0]["ft_get_historial_transaccion_by_tipo"]
  try {
    if (historial) { 
      res.send(historial)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}