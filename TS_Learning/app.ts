// Classes and Objects

// •Class definition
// •Constructors
// •Access modifiers (public,
// •Readonly properties
// // •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// private,
// protected)
// •Abstract classes and methods


// •Constructors

// class User {
//      name:string
//     age: number
//     constructor(  name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }


interface User2 {
    name:string
    age:number
}
class User {

    constructor(public name: string, public age: number,public detls:User2) {
        this.name = name;
        this.age = age; 
        this.detls = detls
    } 
}
let user1 = new User("John", 30,{name:"hello", age:23});
console.log(user1.detls);
// let user2 = new User("Nitesh", 19);
// console.log(user2);
