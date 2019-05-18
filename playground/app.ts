

// Arrow functions

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


import { Student } from './student';
import { Person } from './person';
import { pipeline } from 'stream';

let newObj : Person = {
    firstName : "Foo",
    lastName : "Bar",
    age : 32,
    email : "test@test.com"
}


// let foo = new Student("Foo", "Bar", 42);
let foo = new Student(newObj);
console.log(foo.sayHello());


// npm install typescript -g









// Module system
// Additional types

// > void
// > any
// > enum


// class Foo{}
// class Bar{}
// class Bam{
//     private foo : Foo;
//     constructor( foo : Foo, private bar : Bar){
//         this.foo = foo;
//     }
//     sayHi(){
//         console.log(this.foo);
//         console.log(this.bar);
//     }
// }

// new Bam(new Foo(), new Bar());

// Decorators

//Class level
@Component({})
@Directive({})
@Pipe({})
@NgModule({})
@Injectable({})

//Property Level
@Input()
@Output()
@HostBinding()

// Method Level
@HostListener()

//Parameter Level
@Inject()


/// https://typescriptlang.org/
    // > documentation > handbook
    // > playground

// > npm install @angular/cli@6 -g

// > ng -v

// > ng new users-app

// > cd users-app

// > ng serve