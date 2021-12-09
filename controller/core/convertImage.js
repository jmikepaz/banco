
const fs = require('fs');
function getImage() {
    // read binary data
    var bitmap = fs.readFileSync('star.jpeg');
    // convert binary data to base64 encoded string
    let result = new Buffer(bitmap).toString('base64');
    result = 'data:image/jpeg;base64,'+result
    return result
}

module.exports = getImage()