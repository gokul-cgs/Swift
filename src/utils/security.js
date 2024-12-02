const CryptoJS = require('crypto-js'); // Import crypto-js
const base64 = require('base-64');
const utf8 = require('utf8');
const key = 'b093986d5fdbafbc23f23ab35696042d'; // 32-byte key for AES-256 encryption

const state = "ON"; // Can be toggled between "ON" and "OFF"

// Encrypt an object
const encrypt = (plaintext) => {
    if (state === "ON") {
        const secretJson = JSON.stringify(plaintext);
        
        // Encrypt using AES-256 with CBC mode (default mode in CryptoJS)
        const encrypted = CryptoJS.AES.encrypt(secretJson, key).toString();
        
        return { "data": encrypted };
    } else {
        return plaintext;
    }
};

// Decrypt an encrypted object
const decrypt = (crypted) => {
    if (state === "ON") {
        // Decrypt using AES-256 with the same key
        const decryptedBytes = CryptoJS.AES.decrypt(crypted, key);
        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        
        // Parse the decrypted string into an object
        try {
            return JSON.parse(decryptedText);
        } catch (e) {
            console.error('Decryption failed:', e);
            return null;
        }
    } else {
        return crypted;
    }
};

// Encrypt a simple string
const encryptString = (plaintext) => {
    if (state === "ON") {
        // Encrypt the string and return the Base64-encoded string
        const encryptedString = CryptoJS.AES.encrypt(plaintext.toString(), key).toString();
        return encryptedString;
    } else {
        return plaintext;
    }
};

// Decrypt a simple string
const decryptString = (crypted) => {
    if (state === "ON") {
        const decryptedBytes = CryptoJS.AES.decrypt(crypted, key);
        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        return decryptedText;
    } else {
        return crypted;
    }
};

// Encrypt and then Base64 encode the string
const encryptUnifiedString = (plaintext) => {
    const encrypted = encryptString(plaintext);
    const utfEncoded = utf8.encode(encrypted);
    const base64Encoded = base64.encode(utfEncoded);
    return base64Encoded;
};

// Decrypt from Base64, then decrypt the string
const decryptUnifiedString = (plaintext) => {
    const base64Decoded = base64.decode(plaintext);
    const utfDecoded = utf8.decode(base64Decoded);
    const decrypted = decryptString(utfDecoded);
    return decrypted;
};

// Base64 encode a value after UTF-8 encoding
const baseutfEncode = (val) => {
    const utfEncoded = utf8.encode(val);
    const base64Encoded = base64.encode(utfEncoded);
    return base64Encoded;
};

// Base64 decode a value and then UTF-8 decode it
const baseutfDecode = (val) => {
    const base64Decoded = base64.decode(val);
    const utfDecoded = utf8.decode(base64Decoded);
    return utfDecoded;
};

module.exports = {
    encrypt,
    baseutfDecode,
    baseutfEncode,
    decryptUnifiedString,
    decryptString,
    encryptUnifiedString,
    decrypt,
    key
};
