/*let arr = [1, 2, 3, 4, 5, 9];
let result = arr.map((a, index) => {
  if (index === 3) {
    console.log(a, "iam 3");
  } else {
    console.log(a, "rest");
  }
});*/

// let data = [1, 2, 3, 4, 5, 6];
// let res = data.splice(1, 4);
// console.log(res);
// console.log(data);

// let fruits = [];
// fruits.push("apple", "mango", "grapes");
// fruits[4] = "tomato";
// console.log(Object.keys(fruits));

//isArray() method

// let pop = { name: "kishore" };
// let iop = [2, 3, 4, 54, 8];
// let result = Array.isArray(pop);
// let result1 = Array.isArray(iop);
// console.log(result);
// console.log(result1, "------------------");

//every method

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));

//reduce
// let reduceArray = [2, 2, 2, 2];
// let cherry = (acc, curr) => {
//   return acc + curr;
// };
// console.log(reduceArray.reduce(cherry, 7));

//destructure loop

// const emp = [
//   {
//     name: "kishore",
//     id: 1,
//     age: "22",
//   },
//   {
//     name: "cherry",
//     id: 2,
//     age: "25",
//   },
// ];

// for (let { name, age } of emp) {
//   console.log(`he is ${name} and his age is ${age}`);
// }

//updating nested object
// const person = {
//   name: "kishore",
//   age: "23",
//   kishore: {
//     job: "developer",
//   },
// };

// const info = { ...person, kishore: { ...person.kishore, area: "coimbatore" } };

// console.log(person, "person");
// console.log(info, "info");

//forEach()
// const data = [1, 2, 3, 4, 5];
// const value = data.forEach((d) => {
//   return d;
// });
// console.log(value); // returns undefined

// const arr = [1, 2, 4, 5, 3];
// const result = arr.forEach((a) => {
//   console.log(a + 10);
// });

//sort method
// let a = [33, 4, 2, 5, 7, 8, 0];
// const sorted = a.sort((a, b) => {
//   return b - a;
// });
// console.log(sorted);

//reduce method
// let data = [
//   { name: "kishore", salary: 17000 },
//   { name: "cherry", salary: 50000 },
// ];
// const result = data.reduce((preValue, curValue) => {
//   return preValue + curValue.salary;
// }, 0);
// console.log(result);
