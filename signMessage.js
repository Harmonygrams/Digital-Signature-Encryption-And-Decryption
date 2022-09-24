const crypto = require('crypto') 
const hash = crypto.createHash('sha256') 
const fs = require('fs') 
const encrypt = require('./encrypt') 
const decrypt = require('./decrypt') 

//Creation of data 
const myData = {
    firstName : 'Zach', 
    lastName : 'Gollwitzer', 
    socialSecurityNumber : 'NO NO NO. Never put personal info in digitally \
    signed message since this form of cryptography doesn\'t hide the data!'
}
//The data is converted to string value using JSON.stringify()
const myStringData = JSON.stringify(myData) 
//The data is hashed using sha256
hash.update(myStringData)
//The data is converted to hex value 
const hashedData = hash.digest('hex') 
const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa.priv.pem', 'utf-8')
//The data is encrypted using the private key of the sender 
const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData) 
//The original data, algorithm used to hash and the signed message is sent to the end user 
const packageOfDataToSend =  {
    algorithm : 'sha256',
    originalData : myData, 
    signedAndEncryptedData : signedMessage
}
module.exports.packageOfDataToSend = packageOfDataToSend