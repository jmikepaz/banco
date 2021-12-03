const pg = require('../../config/conection')
const sendmail = require('../email/email')
const whatsapp = require('../core/whatsapp')

exports.createUser = async function(req, res, next) {  
  let create = await pg.func('public.ft_create_user_account', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  create = create[0]["ft_create_user_account"]
  try {
    if (create) {
      if (create.telefono) {
        whatsapp.sendWhatsappTextMessage(create.telefono , `Te saludadmos de Starbank, Bienvenido ${create.nombre } a la plataforma. 
                                                            Estamos contentos de que utilices nuestros servicios. 
                                                            Utiliza los siguientes datos de accesos en nuestra app. 
                                                            Usuario: *${create.usuario}*
                                                            Contraseña: *${create.contrasenia}*`)
      }

      sendmail.sendEmailUserCreate(create.nombre , create.email, create.usuario, create.contrasenia)
      res.send(create)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}