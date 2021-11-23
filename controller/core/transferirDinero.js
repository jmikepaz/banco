const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.transferirDinero = async function(req, res, next) {  
  let transferir = await pg.func('public.ft_proc_ejecutar_transferencia', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  transferir = transferir[0]["ft_proc_ejecutar_transferencia"]
  try {
    if (transferir) { 
      res.send(transferir)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}