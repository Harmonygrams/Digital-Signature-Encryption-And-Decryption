const crypto = require('crypto') 
const decryptWithPrivateKey = (privateKey, encryptedMessage) => {
    const bufferMessage = Buffer.from(message, 'utf-8')
    return crypto.privateDecrypt(privateKey, bufferMessage)
}
const decryptWithPublicKey = (publicKey, encryptedMessage) => {
    const bufferMessage = Buffer.from(encryptedMessage, 'utf-8') 
    return crypto.publicDecrypt(publicKey, bufferMessage)
}
module.exports.decryptWithPrivateKey = decryptWithPrivateKey
module.exports.decryptWithPublicKey = decryptWithPublicKey