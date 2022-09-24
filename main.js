const fs = require('fs')
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')
const publicKey = fs.readFileSync(__dirname + '/id_rsa.pub.pem', 'utf-8') 
const priateKey = fs.readFileSync(__dirname + '/id_rsa.priv.pem', 'utf-8')
//Stores a buffer object 
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super Secret Message') 

//Decrypt the message 
const decryptWithMessage = decrypt.decryptWithPrivateKey(priateKey, encryptedMessage)
console.log(decryptWithMessage.toString())