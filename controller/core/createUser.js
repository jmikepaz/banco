const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.createUser = async function(req, res, next) {  
  let create = await pg.func('public.ft_create_user_account', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  create = create[0]["ft_create_user_account"]
  try {
    if (create) {
      sendmail.sendEmailUserCreate(create.nombre , create.email, create.usuario, create.contrasenia)
      res.send(create)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}