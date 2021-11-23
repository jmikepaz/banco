let login = require('./login') 
let createUser = require('./createUser') 
let recoveryPassword = require('./recoveryPassword') 
let getServicios = require('./getServicios') 
let getHistorialMovimiento = require('./getHistorialMovimiento') 
let getHistorialByTipo = require('./getHistorialByTipo') 

exports.login = login.login; 
exports.createUser = createUser.createUser; 
exports.recoveryPassword = recoveryPassword.recoveryPassword; 
exports.getServicios = getServicios.getServicios; 
exports.getHistorialMovimiento = getHistorialMovimiento.getHistorialMovimiento; 
exports.getHistorialByTipo = getHistorialByTipo.getHistorialByTipo; 