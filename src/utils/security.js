// import base64 from 'base-64';
const base64 = require('base-64')
// import utf8 from 'utf8'
const utf8 = require('utf8')
const aes256 = require('aes256');
const key = 'b093986d5fdbafbc23f23ab35696042d';

const state = "ON"

const encrypt = (plaintext) => {
    if (state === "ON") {
        const secretJson = JSON.stringify(plaintext);
        const encrypted = aes256.encrypt(key, secretJson);
        return { "data": encrypted }
    } else {
        return plaintext
    }
}

const decrypt = (crypted) => {
    if (state === 'ON') {
        const decrypted = aes256.decrypt(key, crypted);
        const decrypt = JSON.parse(decrypted)
        return decrypt
    } else return crypted
}

const encryptString = (plaintext) => {
    if (state === "ON") {
        const encryptedString = aes256.encrypt(key, plaintext.toString());
        return encryptedString
    }
    else {
        return plaintext
    }
}

const decryptString = (crypted) => {
    if (state === "ON") {
        const dencryptedString = aes256.decrypt(key, crypted.toString());
        return dencryptedString
    }
    else {
        return crypted;
    }
}


const encryptUnifiedString = (plaintext) => {
    const e = encryptString(plaintext)
    const uencoded = utf8.encode(e);
    const bencoded = base64.encode(uencoded);
    return bencoded
}


const decryptUnifiedString = (plaintext) => {
    const bDcode = base64.decode(plaintext);
    const uDcode = utf8.decode(bDcode);
    const dCode = decryptString(uDcode);
    return dCode
}


const baseutfEncode = (val) => {
    const uencoded = utf8.encode(val);
    const bencoded = base64.encode(uencoded);
    return bencoded
}


const baseutfDecode = (val) => {
    const bDcode = base64.decode(val);
    const uDcode = utf8.decode(bDcode);
    return uDcode
}

module.exports = {encrypt,baseutfDecode,baseutfEncode,decryptUnifiedString,decryptString,encryptUnifiedString,decrypt,aes256,key}