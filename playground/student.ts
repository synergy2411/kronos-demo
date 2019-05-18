import {Person } from './person';

export class Student {
    private firstName : string;
    private lastName : string;
    private age : number;
    private email : string;

    constructor(obj : Person){
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.email = obj.email;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }

    sayHello () : string { 
        return "Hello " + this.firstName + " " + this.lastName;
    }
}