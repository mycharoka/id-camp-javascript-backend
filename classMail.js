class Mail {
  constructor() {
      this.from = 'pengirim@dicoding.com';
  }

  sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
  };
}

module.exports = Mail