const pg = require('../../config/conection')

exports.login = async function(req, res, next) {  
  let login = await pg.func('public.ft_get_login', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  login = login[0]["ft_get_login"]
  try {
    if (login) {
      res.send(login)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}