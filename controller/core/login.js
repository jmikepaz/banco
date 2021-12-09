const pg = require('../../config/conection')

exports.login = async function(req, res, next) {  
  console.log(req.body);
  let login = await pg.func('public.ft_get_login', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  login = login[0]["ft_get_login"]
  try {
    if (login) {

      console.log('*****LOGIN*****');
      console.log(login);
      console.log('*****LOGIN*****');
      res.send(login)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}