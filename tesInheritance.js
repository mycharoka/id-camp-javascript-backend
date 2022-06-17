const Mail = require("./classTes");

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber)
    this.username = username
    this.isBussinessAccount = isBussinessAccount
  }
  myProfile(username, isBussinessAccount) {
    return `my name ${username}, is ${isBussinessAccount ? 'Business' : 'Personal'}`;
  }

  sendMessage(msg, to) {
    super.sendMessage(msg, to) 
    return 'apa lo liat liat'
    
  }
}

const wa = new WhatsApp("vidi", true, 8844564)
// console.log('wa',wa);
console.log(wa.sendMessage("wat zit tooya", "riot"));
console.log(wa.myProfile("lemon", false))
console.log(wa.showAllContacts())
// console.log(wa.from)