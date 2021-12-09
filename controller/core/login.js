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
      res.status(200).json(login);
    }
  } catch (error) {
    res.status(500).json({error:true , mesage:error});
    //res.send({error:true , mesage:error})
  }
 
}