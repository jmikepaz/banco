const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.getTiposServicios = async function(req, res, next) {  
  let serivicios = await pg.func('public.ft_get_tipos_servicios').catch(err => {
    console.log(err)
  })   
  serivicios = serivicios[0]["ft_get_tipos_servicios"]
  try {
    if (serivicios) { 
      res.send(serivicios)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}