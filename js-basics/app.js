// console.log("Hello JS!");


// var x = "Some value";

// console.log(typeof x);

// x = 10;

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// var x = "20";

// var y = 10;

// var z = 20;

// console.log(x + y);     //2010
// console.log(x - y);     //?

// console.log(x === z);      //?


// Non-blocking 

// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("running...");
//     }, 3000);
// }

// function webRequest(req){
//     console.log("Starting ...",  req.id);
//     longRunningOperation();
//     console.log("Ending  ...", req.id);
// }

// webRequest({id : 1})
// webRequest({id : 2})

//?


// Objects : 
// - Literal

// var myBooks = ["book1", "book2", "book3"];
// var box = {
//     width : 4,
//     length : 6,
//     books : myBooks,
//     addBook : function(book){
//         this.books.push(book)
//     },
//     format : {
//         title : "My New Book"
//     }
// };

// box.volume = box.width * box.length;
// // console.log(box);

// box.addBook("Book4");

// console.log(myBooks.length);    //4

// console.log(delete box.volume);

// console.log(delete box.xyz);

// console.log(box);



// - Constructor
// function Person(fname, lname){
//     // var this = {};
//     // console.log("[INSIDE PERSON]")
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = function(){
//         return this.fname + " " + this.lname;
//     }
//     // return this;
// }

// // Person();
// var foo = new Person("Foo", "Bar");
// var bam = new Person("Bam", "Bas");
// console.log(foo.getFullName());
// console.log(bam.getFullName());


// Instance 

// var Shoe = {
//     size : 8,
//     gender : "Women"
// }
// var magicShoe = Object.create(Shoe);
// console.log(magicShoe.size);
// magicShoe.construction = "Slipper";
// magicShoe.size = 10;
// console.log(magicShoe);


//functions

// function expression


// console.log(x);     // 'undefined'
// var x = null;

// if(x === undefined){}

// console.log(add(2,4));


// function add (num1 , num2){
//     return num1 + num2;
// }

//function statement
// var addition = function (num1 , num2){
//     return num1 + num2;
// }

// console.log(addition(3,8));      //?
// console.log(add(4,5));

// nested function

// function mystery(){
//     var chooseNumber = function  (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function  (){
//         return 12;
//     }
// }


// var tempFunc = mystery();
// console.log(tempFunc());


// IIFE : 


3;

//    var cyx = (function (){
//        console.log("Something....");
//    });

//    cyx ();


// var x = 100;
// (function () {
//     console.log("Something....");
//     x = "110";
// } ());

// console.log(x);


// function b(myVariable){
//     console.log(myVariable);     //?
// }
// function a(){
//     var myVar = 200;
//     b(myVar);

// }

// var myVar  = 100;
// a();


// 'this'

// global.firstName = "Global FName";
// var lastName = "Global LName";

// console.log(this);

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         // var that = this;
//         function nestedFunc(){
//             return "Hello " + this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     },
//     sayHi : function(){
//         console.log("New Value  : ", this.lastName);
//     }
// }

// console.log(user.sayHello());
// console.log("--------------------");
// user.sayHi();



// call, apply, bind

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// var logName = function(lang1, lang2){
//     console.log("[LOGGING]", this.getFullName());
//     console.log("Languages : " , lang1, lang2);
// }

// logName.call(user, "es", "en");
// logName.apply(user, ["en", "es"]);







// FUNCTION BORROWING

// var person = {
//     firstName : "Ajay",
//     lastName : "Singh"
// }

// var getFullName  = user.getFullName.bind(person);
// console.log(getFullName());


//  BINDING THE 'this'

// function logName (){
//     console.log(this);
//     console.log("[LOGGING]", this.getFullName());
// }

// var logFullName = logName.bind(user);

// logFullName();



// CURRYING

// function multiply(a,b,c){
//     return a * b * c;
// }

// var multipleByTwo = multiply.bind(this, 2, 3);
// var multipleByThree = multiply.bind(this, 3);

// console.log(multipleByTwo(2));

// console.log(multipleByTwo(5));
// console.log(multipleByThree(6));


// add(a,b,c); add(a)(b)(c);

// HOF

// XHR Call - 3s ;

// var greet = function(error, data){
//     if(error){
//         console.log("[ERROR]", error);
//     }else{
//         console.log("Hello ", data);
//         return {data : data, id : 1};
//     }
// }

// var asyncFunction = function(){
//     // setTimeout(function(){
//     //     cb(null, {name : "Ajay"});
//     // }, 3000);

//     var promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Here the data comes...")
//         }, 2000);
//     });
//     return promise;
// }

// asyncFunction()
//     .then(data => {
//         return greet(null, data);           // {data, id}
//     })
//     .then(modifiedData => console.log("[Modified data]", modifiedData))
//     .catch(err => console.log(err));


// var sayHello = function(cb, arr){
//     // Code goes here....
//     if(arr.length > 2){
//        cb(null, "Ajay");
//     }else{
//         cb(new Error("Something Bad happened!"));
//     }

// }

// sayHello(greet, [2,3]);

// Closure

// function testClosure(){
//     var x = 4;

//     return function(){
//         return ++x;
//     }
// }

// var tempFunc = testClosure();
// console.log(tempFunc());        // 5
// console.log(tempFunc());        // ?

// function buildFunctions() {

//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         // let j = i;
//         arr.push(
//             (function(j){
//                 return function(){
//                     return j;
//                 }
//             }(i))
//         )
//     }
//     return arr;
// }

// var newArr = buildFunctions();
// console.log(newArr[0]());       // ?
// console.log(newArr[1]());       // ?
// console.log(newArr[2]());       // ?


// add(a,b,c); add(a)(b)(c)

// function add(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// var a = add(3);
// var b = a(4);
// var d = a(5);
// console.log(b(5));
// console.log(d(6));      

// console.log("ADDITION : " , add(2)(3)(4));


// function qurey(valA){
//     return {
//         getData : function(valB){
//             return {
//                 getMyValue : function(valC){
//                     return "Values : " + valA + " " + valB + " " + valC;
//                 }
//             }
//         }
//     }
// }


// console.log(qurey("First").getData("Second").getMyValue("Third"));





// var Shoe = {
//     size: 8,
//     gender: "Women"
// }

    // var magicShoe = Object.create(Shoe);

    // var magicShoe = {};

    // magicShoe.__proto__ = Shoe;

    // console.log(magicShoe.gender);

    // console.log(magicShoe.hasOwnProperty('gender'));        // ?

    // console.log(Shoe.isPrototypeOf(magicShoe));        //

    // console.log(magicShoe.__proto__.__proto__);




    // function Person(fname, lname){
    //     this.fname = fname;
    //     this.lname = lname;
    //     this.greeting = function(){
    //         return "Hello " + this.fname + " " + this.lname;    
    //     }
    // }

    // Person.prototype.greet = function(){
    //     return "Hello " + this.fname + " " + this.lname;
    // }

    // var foo = new Person("Foo", "Bar")

    // console.log(foo.greeting());

    // https://github.com/synergy2411/kronos-demo

    // var str = "Welcome to Javascript!"

    // console.log(str.length);    //  ?

    // String.prototype.countAll = function(letter){
    //     var counter =0;

    //     for(var i =0 ; i<= this.length ; i++){
    //         if(this.charAt(i).toUpperCase() === letter.toUpperCase()){
    //             counter++;
    //         }
    //     }
    //     return counter;
    // }

    // console.log(str.countAll('e'));
    // var newStr = "Hello JavaScript"
    // console.log(newStr.countAll('l'));



    // function demo(arr){
    //     // 'use strict';    
    //     if(arr.length > 2){
    //         let load = "LOADING";
    //         console.log(flash);     //undefined
    //     }else{
    //         let flash = "FLASHING";
    //     }
    // }

    // demo([2,3,4]);

   







