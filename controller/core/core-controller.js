let login = require('./login') 
let createUser = require('./createUser') 
let recoveryPassword = require('./recoveryPassword') 
let getServicios = require('./getServicios') 

exports.login = login.login; 
exports.createUser = createUser.createUser; 
exports.recoveryPassword = recoveryPassword.recoveryPassword; 
exports.getServicios = getServicios.getServicios; 