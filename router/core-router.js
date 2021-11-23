
let express = require('express')
let router = express.Router()
let coreController = require('../controller/core/core-controller')
let mdAunt = require('../middleware/middleware-authentication')
/* uso de middleware */
//router.use(mdAunt.content_type)
//router.use(mdAunt.api_key) 


router.post('/login', coreController.login) 
router.post('/createUser', coreController.createUser) 
router.post('/recoveryPassword', coreController.recoveryPassword) 
router.get('/getServicios', coreController.getServicios) 
router.post('/getHistorialMovimiento', coreController.getHistorialMovimiento) 
router.post('/getHistorialByTipo', coreController.getHistorialByTipo) 

module.exports = router