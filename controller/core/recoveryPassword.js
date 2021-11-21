const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.recoveryPassword = async function(req, res, next) {  
  let recovery = await pg.func('public.ft_proc_recovery_account', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  recovery = recovery[0]["ft_proc_recovery_account"]
  try {
    if (recovery) {
      if (recovery.estado) {
        sendmail.sendEmailRecoveryPassword(recovery.nombre , recovery.email, recovery.usuario, recovery.password)
      }
      res.send(recovery)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}