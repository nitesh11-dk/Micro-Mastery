// Classes and Objects

// •Class definition
// •Constructors
// •Access modifiers (public,
// protected,
// private)

// •Readonly properties
// // •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// private,
// protected)
// •Abstract classes and methods


// •Constructors
// method -1 

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
    } 
}
let user1 = new User("John", 30,{name:"hello", age:23});
// console.log(user1.detls);
// let user2 = new User("Nitesh", 19);
// console.log(user2);


//  ? this 

// ! M -1
// class Dog{
// public name:string ;
//     constructor(name:string){
//        this.name= name ;
//     }
// }
// M-2
// class Dog{
//     constructor(public name:string ){
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// ?  •Access modifiers (public,
// ?  protected,
// ?  private)


//  public 
//  if your class is public you can access it from anywhere , in class , out side the class in classs  methods and also in in inheritance class 
// class Dog{
//     public name:string ;
//     constructor(name:string ){
//           this.name= name ;
//     }
// }

// class Cat extends Dog{
//     constructor(name:string){
//         super(name);
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// let cat = new Cat("kitty");
// console.log(cat.name);

// ? private 
//  ts me error  dega but but js me vo convert hoga execute hoga  
//  the attributes that are defined ussisng this  private keyword , we can aceest that varible in the class but not outside the class or in class instace or classs childs 
// class Dog{
//     private name:string ;
//     constructor(name:string ){
//           this.name= name ;
//     }
// }

// class Cat extends Dog{
//     constructor(name:string){
//         super(name);
//     }
// }

// let dog = new Dog("hello");
// console.log(dog.name);

// let cat = new Cat("kitty");
// console.log(cat.name);

// Property 'name' is private and only accessible within class 'Dog'.
// 107 console.log(dog.name);
