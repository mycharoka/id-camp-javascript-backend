const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"]
]);

// const caps = new Map( ["Jakarta", "Indonesia"],
// ["London", "England"],
// ["Tokyo", "Japan"])

// console.log(caps);

console.log(capital);
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
console.log(capital.has("Singapore"));

// console.log(capital.delete("Tokyo"));

console.log(capital)