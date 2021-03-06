// const stock = {
//   coffeeBeans: 250,
//   water: 1000,
// }

// const checkStock = () => {
//   return new Promise((resolve, reject) => {
//       if (stock.coffeeBeans >= 16 && stock.water >= 2500) {
//           resolve("Stok cukup. Bisa membuat kopi");
//       } else {
//           reject("Stok tidak cukup");
//       }
//   });
// };

// const handleSuccess = resolvedValue => {
// // console.log("🚀 ~ file: promise.js ~ line 17 ~ resolvedValue", resolvedValue)
//   console.log(resolvedValue);
// }

// const handleFailure = rejectionReason => {
// // console.log("🚀 ~ file: promise.js ~ line 22 ~ rejectionReason", rejectionReason)
//   console.log(rejectionReason);
// }

// checkStock().then(handleSuccess).catch(handleFailure);


const state = {
  stock: {
      coffeeBeans: 250,
      water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (!state.isCoffeeMachineBusy) {
              resolve("Mesin kopi siap digunakan.");
          } else {
              reject("Maaf, mesin sedang sibuk.");
          }
      }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
      state.isCoffeeMachineBusy = true;
      setTimeout(() => {
          if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
              resolve("Stok cukup. Bisa membuat kopi.");
          } else {
              reject("Stok tidak cukup!");
          }
      }, 1500);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Kopi sudah siap!")
      }, 2000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
      console.log("Memanaskan air...");
      setTimeout(() => {
          resolve("Air panas sudah siap!");
      }, 2000);
  })
}

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
      console.log("Menggiling biji kopi...");
      setTimeout(() => {
          resolve("Kopi sudah siap!");
      }, 1000);
  })
}

function makeEspresso() {
  checkAvailability()
      .then((value) => {
          // console.log("🚀 ~ file: promise.js ~ line 74 ~ .then ~ value", value)
          console.log(value);
          return checkStock();
      })
      .then(val => {
        console.log('val > ', val)
        const promises = [boilWater(), grindCoffeeBeans()]
        
        return Promise.all(promises)
      })
      .then((value) => {
          // console.log("🚀 ~ file: promise.js ~ line 79 ~ .then ~ value", value)
          console.log(value)
          return brewCoffee();
      })
      .then(value => {
      // console.log("🚀 ~ file: promise.js ~ line 84 ~ makeEspresso ~ value", value)
          console.log(value);
          state.isCoffeeMachineBusy = false;
      })
      .catch(rejectedReason => {
      console.log("🚀 ~ file: promise.js ~ line 89 ~ makeEspresso ~ rejectedReason", rejectedReason)
          console.log(rejectedReason);
          state.isCoffeeMachineBusy = false;
      });
}

makeEspresso();

/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Membuatkan kopi Anda...
Kopi sudah siap!
*/