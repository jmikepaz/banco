let config = require('../config/config') 

module.exports.content_type = function(req, res, next) {
  if (req.get('content-type') == 'application/json') {
    next()
  } else {
    res.status(403).send('Error de headers mal enviadas')
  }
}

module.exports.api_key = function(req, res, next) {
  if (req.get('authorization') == config.app.api_key) {
    next()
  } else {
    res.status(403).send({error:'Error de key api'})
  }
}

 
