// [1] list of abstractions
const canSendMessage = self => ({
  sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
  isValid: () => console.log('valid phone', self.from)
});

const checkValidStore = self => ({
  validStore: () => console.log(`${self.store} actually exist`)
})

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
// [3] attributes
const self = {
  from,
  message,
  store
};
// [4] method
const personalEnterpriseBehaviors = self => ({
  createCatalog: () => console.log('Catalog has created: ', self.store)
});

// [5] create object composition
return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self), checkValidStore(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');//from, msg, store
pe1.validStore()
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih
pe1.isValid()

console.log('pe1 > ', pe1);