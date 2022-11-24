import { countries } from "./countries.js";
// function sum (a,b) {
//     console.log(a+b);
// }
// sum(10,2);

// function numbers() {
//     for (var i = 0 ; i < 6 ; i++ )
//         console.log(i);

//     console.log(i);
// }
// numbers();

// const person = {name :"praveen"}
// let name1 = "alluri"

// // you can change the properties of a CONST varible.//
// person.name = "marthanda"
// name1 = "varma"

// console.log(person)

// var a = 10;
// let b = 20;

// function write () {
//     var c = 30;
//     // console.log(c);
// }

// // write();

// console.log(c);

// let a = 10;

// if(true) {
//     let a = 200000;
//     console.log(a);
// }
// console.log(a);

// function hi1(){
// setTimeout(() => {
//     console.log('hi number 1')
// }, 1000);
// };

// function hi3() {
//     setTimeout(() => {
//         hi3();
//     }, 0);
// }
// hi3();

// hi1();
// console.log('hi number 2');

// function one() {
//   console.log("one");
//   two();
// }

// function two() {
//     console.log("two");
//     three();
// }

// function three() {
//     console.log("three");
// }

// one();

// hoist();

// console.log(x);

// var x=7;

// console.log(hoist);

// function hoist(){
//     console.log('hoisting test');
// }

// console.log(this)

// let name = 'praveen';
// let number = 7587303021;
// let no = 768;

// console.log(`
// my name is : ${name} and
//    my num is : ${number}
// `);
// let result = no  + number;
// let xy = 5;
// let ab = ++ xy;
// console.log(ab);

// let x = true;
// let y = false;
// if (x== true && y== true){
//     console.log("perfect");
// }
// else if(x==true || y== true){
//    console.log('one thing missing');
// }
// else{
//     console.log("not perfect");
// }

// ternary operator//
// let login = false;
// login ? console.log("successfully loggedin") : console.log("create an account first");

// let account = "staff";

// switch (account){
//     case 'student':
//         console.log("you are a student ")
//     break;
//     case 'staff':
//         console.log("you are a staff ")
//     break;
//     default:
//         console.log("you are a guest")
// }

// let staff =['raj', 'arun', 'praveen', 'mishra', 'remo', 'rana'];
// console.log(staff[staff.length - 1]);
// staff.push('ali');
// console.log(staff.slice(1,4));
// staff.splice(1,3,'new guy1', 'new guy2');
// console.log(staff);
// let x = [3,5,8,6]
// console.log(x.map(Math.sqrt));
// console.log(x.shift());
// console.log(x);
// ++++++ Math methods +++++++++++++++
// const pie = Math.PI;
// console.log(pie);
// console.log(Math.round(pie));
// console.log(Math.floor(pie));
// console.log(Math.ceil(pie));
// console.log(Math.min(92,764,47,89,77,34,21))
// console.log(Math.random());
// console.log(Math.abs(-10));
// console.log(Math.pow(3,3));
// console.log(Math.cos(60));

// +++++++++++++++ for loop +++++++++++++++++++++++

// for (let i= 1; i<9; i++){
//     console.log(`${i}`);
// }

// for (let i= 1; i<9; i++){
//     for(let j=1; j<2; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     };
// }

// con = ['india','lanka','spain','usa','uk','germany','china'];
// newCon =[];

// for (let i=0; i < con.length; i++){
//     newCon.push(con[i].toUpperCase());
// }
// console.log(newCon);

// ++++++++++++++++++++ While loop +++++++++++++++++++++++++++++++++++++++++++

// let i = 0
// while (i <10 ){
//     console.log(i);
//     i= i+1;
// }

// let praveen = new Date();
// console.log(praveen.toString());
// ++++++++++++++++++++++++++++ Functions +++++++++++++++++++++++++++++
// function add(x,y){ // (x,y) are the parameters
// let z= x+y;
// console.log(z);
// } // logic is called arguments

// add(52,27);

// function areaOfCircle(r){
//     let area = Math.PI * r * r;
//     return area;
// }

// console.log(Math.round(areaOfCircle(12)));

// function sumOfArray(arr){
//     let sum =0;
//     for(let i=0; i< arr.length; i++ ) {
//         sum = sum + arr[i];
//     }
//     return sum;

// }
// let number = [3,7,2,9,4,6];

// let final_arr = sumOfArray(number);
// console.log(final_arr);

// +++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++

// let sumOfAll = (...args) => {
//     let sum = 0
//     for(let any of args){
//         sum = sum+any;
//     }
//     return sum;
// }
// console.log(sumOfAll = (7,3,5,6,7,8,9));

// let showMessage = function (){
//     console.log("Hello World!");
// };

// showMessage();

// medianof2Arr(arr1);

//. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.

// const unique = (value, index, self) => {
//   return self.indexOf(value) === index;
// };
// console.log(countries);
// // const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
// const uniquecont = countries.filter(unique);

// console.log(uniquecont);
