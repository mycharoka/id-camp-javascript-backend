
class Mail {
  // #contacts = []
  constructor(parameters) {
      console.log('parameters mail > ', parameters);
      // this.owner = parameters
      // this.from = 'pengirim@dicoding.com';
      this.from = parameters;
      // this.contacts = [];
      this._contacts = []
  }
  sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
      this._contacts.push(to);
      // this.#contacts.push(to)
  };
  showAllContacts() {
    return this._contacts
  }
}

const mail1 = new Mail();
// mail1.sendMessage("padang", "panjang")
// mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

module.exports = Mail