import CryptoJS from 'crypto-js';

class Encryption {
    constructor() {}

    encrypt(data) {
        return CryptoJS.AES.encrypt(data, '8tn6kme24lfbea5ojzoci4').toString();
    }

    decrypt(data) {
        var bytes  = CryptoJS.AES.decrypt(data, '8tn6kme24lfbea5ojzoci4');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    }
}

export default Encryption;