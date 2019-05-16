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

var user = {
    firstName : "Foo",
    lastName : "Bar",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}









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