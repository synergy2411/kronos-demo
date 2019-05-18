"use strict";
// Arrow functions
exports.__esModule = true;
// var numbers = [2,3,4,5];
// //ES5
// var doubleArray = numbers.map(function (value){
//     return value * 2;
// })
// console.log(doubleArray);
// //ES6
// var tripleArray = numbers.map(value => value * 3);
// console.log(tripleArray);
// Template String 
// - Mutli-line string
// - include variables within string
// var firstName = "Foo";
// console.log(`Hello ${firstName} !`);
// console.log("Hello 
// ${firstName} !");
// Constants and block scopes : restrict the scope of variable to the nearest curly braces
// - let 
// - const
// Destructuring : Objects & Arrays
// let arr = ["foo", "bar", "bam"];
// let [arr1, arr3] = arr;
// console.log(arr3);          //?
// let obj = {
//     drawText : text => {console.log("Drawing " + text)},
//     drawCircle : r => {console.log(Math.PI * r * r);}
// }
// let {drawCircle ,drawText } = obj;
// drawText("Sample Text");
// drawCircle(3);
// Spread & Rest operators (...)
// let arr = ["String", true, 42, function(){}, {}];
// Rest
// function demo(xyz, ...args){
//     console.log(args[0])
// }
// // demo("Foo")
// // demo("Foo", "Bar")
// demo("Foo", "Bar", "Bam")
//Spread
// let arr = [3,4,5];
// let newArr = [1,2, ...arr, 6,7];
// console.log(newArr);            //?
// Classes & Inheritance
var student_1 = require("./student");
var foo = new student_1.Student("Foo", "Bar", 42);
console.log(foo.sayHello());
// npm install typescript -g
// Module system
// Additional types
// Decorators
