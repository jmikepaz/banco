const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.searchEmail = async function(req, res, next) {  
  let search = await pg.func('public.ft_validate_email', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  search = search[0]["ft_validate_email"]
  try {
    if (search) { 
      res.send(search)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}