// //last IndexoF method

// let color = ["red", "green", "blue", "red", "black"];
// let myFav = color.lastIndexOf("red");
// console.log(myFav);

// //reduce method
// let nums = [1, 2, 3, 4, 5];
// let sum = (accumulator, currentValue) => {
//   return accumulator + currentValue;
// };
// console.log(nums.reduce(sum, 5));

// //slice method
// let names = ["kishore", "cherry", "cattie", "sweety"];
// let a = 10;
// if (a > 0) {
//   let lucky = names.slice(2);
//   console.log(lucky);
// }

// //toString
// let array = [1, 2, 3, 4, 5];
// console.log(array.toString());

// //split
// let words = "I am a web   developer";
// console.log(words.split(" "));
// let noOfWords = words.split(" ").filter((word) => word).length;
// console.log(noOfWords);

// //reverse
// let message = "Hi kishore , you completed array methods";
// let msg = message.split("").reverse().join("");
// console.log(msg);
// //split(" ")==> returns "hi cherry as "cherry hi"
// //split("")==>return "hi cherry" as "yrrehc ih"

// //more deep on split
// let job = "web developer ";
// console.log(job.split("").reverse());
// console.log(job.split(" ").reverse());

let company = ["pop", "tio", "ut", "ituei", "dmvnds"];
let result = company.splice(0, 4);
console.log(result);
