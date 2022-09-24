const crypto = require('crypto') 
const fs = require('fs') 
const decrypt = require('./decrypt')

//This is the data we're receiving from the sender
const receiveData = require('./signMessage').packageOfDataToSend 
//creating a hash sha256 using the value sent to us by the sender 
const hash = crypto.createHash(receiveData.algorithm) 
//Decrypting using the public key
const publickKey = fs.readFileSync(__dirname + '/id_rsa.pub.pem', 'utf-8') 
const decryptedMessage = decrypt.decryptWithPublicKey(publickKey, receiveData.signedAndEncryptedData) 
const decryptedMessageHex = decryptedMessage.toString()
const hashOfOriginal = hash.update(JSON.stringify(receiveData.originalData)) 
const hashOfOriginalHex = hash.digest('hex') 
if(decryptedMessageHex === hashOfOriginalHex){
    console.log('Success! The data has not been tampered with and the sender is valid')
}else{
    console.log('Uh oh... Someone is trying to manipulate the data') 
}