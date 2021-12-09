const config = {
    app: {
      port: "3000", 
      host: "0.0.0.0",
      api_key: "3NTQyODQyNzM2MGE4NWI0MDFjNmMzYjZhMDE5NzgyY2Q",
      backup: false
    },
    db: {
      host: 'localhost',
      //host: '167.99.158.191',
      user: 'desarrollo',
      password: 'uthdesarrollo2021*', 
      database: 'starbank' 
    },
    email:{
      service: 'gmail',
      auth:{
          user: 'notificaciones.starbank@gmail.com',
          pass: '3tarB4nk.#'
      }
  },
  whatsapp:{
    token:"369b99mkanxtuzpc",
    instance:"380457"
  },
  url_files:"http://167.99.158.191/transacciones/"
  };
  
  
  
  module.exports = config;