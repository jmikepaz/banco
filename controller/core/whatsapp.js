var request = require('request'); 
var config = require('../../config/config') 
var url_text = `https://api.chat-api.com/instance${config.whatsapp.instance}/message?token=${config.whatsapp.token}`;
var url_file = `https://api.chat-api.com/instance${config.whatsapp.instance}/sendFile?token=${config.whatsapp.token}`;
    



exports.sendWhatsappTextMessage = async function(numero , mensaje) {  

    var data = {
        phone: '504' + numero, 
        body: mensaje, 
    };

    request({
        url: url_text,
        method: "POST",
        json: data
    });
   
}

exports.sendWhatsappMessageFile = async function(numero , mensaje, file) {  

    var data =  {
            "body": file,
            "filename":mensaje,
            "caption": mensaje,
            phone: '504' + numero
    }
    request({
        url: url_file,
        method: "POST",
        json: data
    });
   
}



