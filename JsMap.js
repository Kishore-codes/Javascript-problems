//Map in js
// const pop = new Map();
// pop.set("name", "kishore");
// pop.set(true, "login");
// const info = {
//   job: "developer",
//   salary: "50k",
// };
// pop.set(info, "userInfo");
// console.log(pop);

//map methods
// const pop = new Map();
// pop.set("name", "kishore");
// pop.set(true, "login");
// pop.set(102, "reg no");

// pop.delete(102);

// console.log(pop.has("name"));
// console.log(pop.size);

//mapIterators

// const pop = new Map();
// pop.set("name", "kishore");
// pop.set(true, "login");
// pop.set(102, "reg no");

// console.log(pop.values());
// console.log(pop.keys());
// console.log(pop.entries());

//forEach and for-of in Map
const pop = new Map();
pop.set("name", "kishore");
pop.set(true, "login");
pop.set(102, "reg no");

// pop.forEach((key, value) => {
//   console.log(`${key} - ${value}`);
// });

//for-of
for (const [key, value] of pop) {
  console.log(`${key} - ${value}`);
}
