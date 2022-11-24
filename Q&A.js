// Declare variables and assign string, boolean, undefined and null data types,
// Display all the value with there type.?
var a = typeof "praveen";
var b = typeof false;
var c = typeof 5;
var z;
var f = typeof null; // All primitive types, except null, can be tested by the typeof operator.typeof null returns "object", so one has to use === null to test for null.
console.log([a, b, c, z, f]);

// Declare variables to store your first name, last name, marital status, country and age and display them using interploation method?
let firstName = "praveen";
let lastName = "alluri";
let maritalStatus = "single";
let Age = 28;
const country = "India";
console.log(
  `My name is ${firstName} ${lastName}. I'am ${maritalStatus} and my age is ${Age}, currently living in ${country}`
);

// Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
let caps = "i'm testing JS code to sharpen my analytical skills.";
console.log(caps.toUpperCase());

//Check if the string contains a word Script using includes() method?
const paragraph =
  "i belive in vedic scripts, what they written 10 ages back, the science is proving now. we have to do more research on those texts written by rishis(scientists of the those era) to step forward in modren science.,";
let word = "vedic";
let word1 = "magnatic";
console.log(
  `the word "${word1}" ${
    paragraph.includes(word1) ? "is" : "is not"
  } there in the above sentence.`
);

// Split the string into an array using split() method?
const parasplit = paragraph.split(); // it will make entire sentence into array
console.log(parasplit);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let mnc = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const MNCs = mnc.split(","); // (" ")it will make array and count every word as array index.
console.log(MNCs);

// Use lastIndexOf to determine the position of the last occurrence of a script? ####### doubt #####################
let lastWord = "Google";
console.log(`the word "${lastWord}" position is ${mnc.lastIndexOf(lastWord)} `);

// Use search to find the position of the first occurrence of the word because in the following sentence
//:'You cannot end a sentence with because because because is a conjunction'?
let h =
  "You cannot end a sentence with because because because is a conjunction";
console.log(h.search("because"));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let kona =
  "      You cannot end a sentence with because because because is a conjunction       ";
console.log(kona.trim());

// Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
s = 2;
o = 3;
console.log(Boolean(s > o));
console.log(s != o);

// Use the Date object to do the following activities
//     - What is the year today?
// Find out the numbers of seconds elapsed from January 1, 1970 to now?
let d = new Date();
console.log(d.getFullYear());
console.log(Date());
console.log(d.getTime()); // it will show time milliseconds since January 1, 1970.

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
// (area = 0.5 x b x h).
let base = prompt("please enter the base of the triangle: ");
let height = prompt("please enter the height of the triangle: ");
const area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}.`); // answer availble in browser console.

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = window.prompt("please enter the value of x1");
let x2 = window.prompt("please enter the value of x2");
let y1 = window.prompt("please enter the value of y1");
let y2 = window.prompt("please enter the value of y2");
let m = (y2 - y1) / (x2 - x1);
console.log(`the slope for above line is ${m} `);

// . Get radius using prompt and calculate the area of a circle (area = pi x r x r)
//and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = window.prompt("please provide the radious value ");
let areaOfCircle = Math.PI * r * r;
let c = 2 * Math.PI * r;
console.log(
  `the area of a circle is "${areaOfCircle}" and the circumference of a circle is "${c}"  `
);

// . Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm {not able to print in this format}
//     - DD/MM/YYYY HH:mm
let dt = new Date();
console.log(dt.toISOString());
console.log(dt.toLocaleString());
console.log(dt.toString());

//. Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//give feedback:'You are old enough to drive' but if not 18
//give another feedback stating to wait for the number of years he needs to turn 18.
let age = window.prompt("Enter your age:");
if (age > 18) {
  console.log("You are eligible for drive");
} else {
  console.log("You are not eligible for drive");
}

// Even numbers are divisible by 2 and the remainder is zero.
//How do you check, if a number is even or not using JavaScript?
let num = window.prompt("please enter a number");
if (num % 2 == 0) {
  console.log("this is a even number");
} else {
  console.log("this is not a even number");
}

// Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
function marks(x) {
  if (x >= 80 && x <= 100) {
    console.log("Grade A");
  } else if (x >= 70 && x <= 79) {
    console.log("Grade B");
  } else if (x >= 60 && x <= 69) {
    console.log("Grade C");
  } else if (x >= 50 && x <= 59) {
    console.log("Grade D");
  } else if (x >= 0 && x <= 49) {
    console.log("Grade F");
  } else {
    console.log("please provide vaild marks");
  }
}
marks();

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
const season = prompt("please enter the month name");
switch (season) {
  case "september":
  case "october":
  case "november":
    console.log("The Season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The Season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The Season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The Season is Summer.");
    break;
}

// Write a program which tells the number of days in a month./consider leap year also?
const numOfDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};
console.log(numOfDays(2024, 2));

//Create a separate countries.js file and store the countries array in to this file,
//create a separate file web_techs.js and store the webTechs array in to this file.
//Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

//In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
console.log(shoppingCart);
let replace = shoppingCart.indexOf("Tea");
if (replace != 0) {
  shoppingCart[replace] = "Green tea";
}
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
if (countries.includes("ethiopia") == true) {
  console.log("ethiopia");
} else {
  countries.push("ethiopia");
}
console.log(countries);

// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(Math.max(...ages));
console.log(Math.min(...ages));

let middlePoint = Math.floor(ages.length / 2);
let len = ages.length;
if (len % 2 == 0) {
  let median = (ages[middlePoint] + ages[middlePoint + 1]) / 2;
  console.log(`
    The median is  => ${median}`);
} else {
  let median = ages[middlePoint];
  console.log(`
    The median is => ${median}`);
}

let min = ages[0];
let max = ages[ages.length - 1];
console.log(`
The youngest among the group is "${min}" years old and eldest is "${max}" years old.`);

const initialValue = 0;
let sumOfAge = ages.reduce((acc, cur) => acc + cur, initialValue);
let avgAge = sumOfAge / ages.length;
console.log(`
The average age is ${avgAge}`);

let range = max - min;
console.log(`range of an array is ${range}`);

let minAvg = Math.abs(min - avgAge);
let maxAvg = Math.abs(max - avgAge);

console.log(
  `The compare minimum Average is "${minAvg.toFixed(
    1
  )}" and compare maximum Average is "${maxAvg.toFixed(1)}"`
);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(
  `The sum of even numbers are "${evenSum}" and the sum of odd numbers are "${oddSum}". `
);

// Write a script which generates a random hexadecimal number.
let characters = "0123456789abcdef";
let str = "";
for (let i = 0; i < 10; i++) {
  str += characters[Math.floor(Math.random() * 16)];
}
console.log(str);

// Extract all the countries contain the word 'land' from the countries array and print it as array
let arr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) arr.push(countries[i]);
}
if (arr.length > 0) {
  console.log(arr);
} else {
  console.log("All these are countries without land");
}

//Find the country containing the hightest number of characters in the countries array
function Longest_Country_Name(country_name) {
  return country_name.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(Longest_Country_Name(countries));

// Extract all the countries containing only four characters from the countries array and print it as array
const result = countries.filter((word) => word.length == 4);
console.log(result);

// Extract all the countries containing two or more words from the countries array and print it as array
const word2country = countries.filter((word) => word.length > 2);
console.log(word2country);

// Reverse the countries array and capitalize each country and stored it as an array
console.log(countries.reverse());
let rc = countries.map((Element) => {
  return Element.toUpperCase();
});
console.log(rc);

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//Write a function which calculates bmi. BMI is used to broadly define different weight groups
//in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more
function BMI(weightInKg, heightInCm) {
  let bodyMass = (weightInKg / heightInCm / heightInCm) * 10000;
  console.log(`Your BMI is ${bodyMass.toFixed(2)}.`);
  if (bodyMass <= 18.5) {
    console.log("You are in the Underweight range");
  } else if (bodyMass > 18.5 && bodyMass < 24.9) {
    console.log("You are in the Healthy Weight range");
  } else if (bodyMass > 25 && bodyMass < 29.9) {
    console.log("You are in the Overweight range");
  } else if (bodyMass >= 30) {
    console.log("You are in the Obese range");
  }
}
BMI(78, 182);

//Write a functions which checks if all items are unique in the array?
const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};
console.log(countries);
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
const uniquecont = countries.filter(unique);

console.log(uniquecont);

// +++++++++++++++++++++++++++++++++++++++ END +++++++++++++++++++++++++++++++++++++++++ //
