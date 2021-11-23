let login = require('./login') 
let createUser = require('./createUser') 
let recoveryPassword = require('./recoveryPassword') 
let getServicios = require('./getServicios') 
let getHistorialMovimiento = require('./getHistorialMovimiento') 
let getHistorialByTipo = require('./getHistorialByTipo') 
let getTiposServicios = require('./getTiposServicios') 
let pagoServicio = require('./pagoServicio') 
let searchAccount = require('./searchAccount') 

exports.login = login.login; 
exports.createUser = createUser.createUser; 
exports.recoveryPassword = recoveryPassword.recoveryPassword; 
exports.getServicios = getServicios.getServicios; 
exports.getHistorialMovimiento = getHistorialMovimiento.getHistorialMovimiento; 
exports.getHistorialByTipo = getHistorialByTipo.getHistorialByTipo; 
exports.getTiposServicios = getTiposServicios.getTiposServicios; 
exports.pagoServicio = pagoServicio.pagoServicio; 
exports.searchAccount = searchAccount.searchAccount; 