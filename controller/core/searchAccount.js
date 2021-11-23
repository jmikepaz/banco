const pg = require('../../config/conection')
const sendmail = require('../email/email')

exports.searchAccount = async function(req, res, next) {  
  let search = await pg.func('public.ft_search_user_account', [JSON.stringify(req.body)]).catch(err => {
    console.log(err)
  })   
  search = search[0]["ft_search_user_account"]
  try {
    if (search) { 
      res.send(search)
    }
  } catch (error) {
     res.send({error:true , mesage:error})
  }
 
}