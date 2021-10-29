// const fetch = require("node-fetch");

// class Addition {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   getSum() {
//     return this.num1 + 9;
//   }
//   get info() {
//     return this.getSum();
//   }
// }

// let sum = new Addition(10, 20);
// console.log(sum.info);

//promises
// let isLoggedIn = true;
// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (!isLoggedIn) {
//       resolve("Welcome");
//     } else {
//       reject("Something is not right");
//     }
//   });
// });

// data.then((value) => console.log(value)).catch((error) => console.log(error));

//promise 2
// const actionHandler = (time, event) => {
//   return new Promise((resolve, reject) => {
//     if (time) {
//       setTimeout(() => {
//         resolve(event());
//       }, time);
//     } else {
//       reject(console.log("Bye"));
//     }
//   });
// };

// actionHandler(2000, () => {
//   console.log("Venue at singapore plaza");
// });

//async await
// const data = () => {
//   console.log("my Data");
// };

// const userInfo = async (data) => {
//   console.log("1");
//   await data();
//   console.log("2");
// };
// userInfo(data);
// console.log("3");

// fetch data from api
// const apiData = () => {
//   let fetchData = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     headers: { "Content-type": "application/json;charset=UTF-8" },
//   });
//   fetchData
//     .then((response) => response.json())
//     .then((data) => console.log(data[0]))
//     .catch((err) => console.log(err));
// };
// apiData();

//post data to api
// const kishore = {
//   age: 23,
//   job_role: "Software engineer",
// };

// const apiData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { "Content-type": "application/json;charset=UTF-8" },
//     body: JSON.stringify(kishore),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
// apiData();

//callback

let cars = ["audi", "benz", "bently"];

const fun1 = () => {
  setTimeout(() => {
    cars.forEach((car) => console.log(car));
  }, 1000);
};

const fun2 = (newCar, function1) => {
  setTimeout(() => {
    cars.push(newCar);
    function1();
  }, 2000);
};
fun2("bmw", fun1);
