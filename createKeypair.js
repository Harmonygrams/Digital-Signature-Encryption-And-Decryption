const crypto = require('crypto') 
const fs = require('fs') 
const genKeyPair = () => {
    //Generates a property where the keys are stored in private and public keys 
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength : 4096, 
        publicKeyEncoding : {
            type : 'pkcs1',  //Public key cryptography standard 1
            format : 'pem'   //Most common formatting choice 
        }, 
        privateKeyEncoding : {
            type : 'pkcs1',  //Private key cryptography standard 1 
            format : 'pem'   //Most common formatting choice 
        } 
    })
    fs.writeFileSync(__dirname +'/id_rsa.pub.pem', keyPair.publicKey)
    fs.writeFileSync(__dirname + '/id_rsa.priv.pem', keyPair.privateKey)
}
genKeyPair()