let login = require('./login') 
let createUser = require('./createUser') 
let recoveryPassword = require('./recoveryPassword') 

exports.login = login.login; 
exports.createUser = createUser.createUser; 
exports.recoveryPassword = recoveryPassword.recoveryPassword; 