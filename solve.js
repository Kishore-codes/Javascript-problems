// 1. maximum values in a array
let nums = [19, 233, 53, 343, 34];
console.log(Math.max(...nums));

//using functiion
let maxFun = (values) => {
  let maxmimum = values[0];
  for (let i = 0; i < values.length; i++) {
    let element = values[i];
    if (element > maxmimum) {
      maxmimum = element;
    }
  }
  return maxmimum;
};
let bigvalue = maxFun([1, 5, 3, 3, 33, 90]);
console.log(bigvalue);

//reduce method withn array of objects
let data = [
  {
    name: "kishore",
    salary: 10,
  },
  {
    name: "cherry",
    salary: 20,
  },
];

const reducer = (total, currentData) => {
  return total + currentData.salary;
};

const result = data.reduce(reducer, 0);
console.log(result);

//2 sum of the array
//using for loop
let sum = [1, 3, 5];
let total = 0;
for (let i = 0; i < sum.length; i++) {
  total = total + sum[i];
}
console.log(total, "pop");

//3 REmoving duplicate element from an array
let duplicate_array = [1, 2, 5, 2, 5, 3, 4];
let original_array = [];
for (let i = 0; i < duplicate_array.length; i++) {
  let element = duplicate_array[i];
  let index = original_array.indexOf(element);
  if (index == -1) {
    //if indexOf is true , it returns 0 if it is false thn return  -1
    original_array.push(element);
  }
}
console.log(original_array);

//using filter
let dup_arr = [1, 2, 3, 2, 3, 25, 5];
let org_arr = dup_arr.filter((dup, index) => {
  return dup_arr.indexOf(dup) === index;
});
console.log(org_arr);

//4 counting no of words in a sentence
let sentence = "Hi cherry  how are u";
console.log(sentence.split(" "));
const words = (str) => {
  return str.split(" ").filter((s) => s != "").length;
};
console.log(words(sentence));

//5 reverse the string
//for loop
let normal_sent = "hey kishore try to reverse me";
// let reversed = "";
// for (let i = 0; i < normal_sent.length; i++) {
//   let element = normal_sent[i];
//   reversed = element + reversed;
// }
// console.log(reversed);

//6 reverse method
let reversed_word = normal_sent.split("").reverse().join(" ");
console.log(reversed_word);

let question = "How to reverse a string in javascript?";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(question));

//7 finding leap year

function leapYear(year) {
  if ((year % 400 === 0 && year % 100 !== 0) || year % 4 === 0) {
    console.log(year, " is a leap year ");
  } else {
    console.log("Its not a leap year");
  }
}
leapYear(2020);
leapYear(2022);

//7 finding factorial

function fact(num) {
  if (num === 0) {
    return 1;
  } else {
    let factorialValue = 1;
    for (let i = 1; i <= num; i++) {
      factorialValue = i * factorialValue;
    }
    return factorialValue;
  }
}
console.log(fact(0));
console.log(fact(5));

//factorial using recursive funtion
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(6));

//prime number

function prime(p) {
  for (let i = 2; i <= p / 2; i++) {
    if (p % i === 0) {
      return "prime";
    }
  }
}
console.log(prime(3));

//fibonaci
function fibonaci(n) {
  if (n < 3) {
    return n - 1;
  } else {
    return fibonaci(n - 1) + fibonaci(n - 2);
  }
}
console.log(fibonaci(8));

//summing up fibonacci sequence
function myFibo(num) {
  let fib = [];

  if (num <= 0) {
    return 0;
  }
  fib[0] = 0;
  fib[1] = 1;
  let sum = fib[0] + fib[1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum = sum + fib[i];
  }
  console.log(sum);
}
myFibo(4);
