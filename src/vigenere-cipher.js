const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'revers';
  }

  encrypt(message, key) {

      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }

      const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const wordUpperCase = message.toLocaleUpperCase();
      const keyUpperCase = key.toLocaleUpperCase();
      let resEncrypted = '';

      for (let i=0, j=0; i < wordUpperCase.length; i++) {
          if (alph.includes(wordUpperCase[i])) {
              const resultCharIndex = (alph.indexOf(wordUpperCase[i]) + alph.indexOf(keyUpperCase[j % keyUpperCase.length])) % 26;
              resEncrypted += alph[resultCharIndex];
              j++;
          } else {
              resEncrypted += wordUpperCase[i];
          }    
      }

      return this.type === 'direct' ? resEncrypted : [...resEncrypted].reverse().join('');
  }

  decrypt(encryptedMessage, key) {

      if (!encryptedMessage || !key) {
          throw new Error('Incorrect arguments!');
      }

      const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const wordUpperCase = encryptedMessage.toLocaleUpperCase();
      const keyUpperCase = key.toLocaleUpperCase();
      let resDecrypted = '';

      for (let i=0, j=0; i < wordUpperCase.length; i++) {
          if (alph.includes(wordUpperCase[i])) {
              const resultCharIndex = (alph.indexOf(wordUpperCase[i]) - alph.indexOf(keyUpperCase[j % keyUpperCase.length]) + 26) % 26;
              resDecrypted += alph[resultCharIndex];
              j++;
          } else {
              resDecrypted += wordUpperCase[i];
          }    
      }

      return this.type === 'direct' ? resDecrypted : [...resDecrypted].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
