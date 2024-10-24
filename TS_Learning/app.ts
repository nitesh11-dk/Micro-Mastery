// Classes and Objects

// •Class definition
// •Constructors
// •Access modifiers (public,
// protected,
// private)

// •Readonly properties

// •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
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


// ? public 
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


// ? proctected , yisme class me hii access kar sakte ho , aur yiske sub claeed me vhi access kar sakte ho but , bhar use nahi kar sakte with any insstance of parent class or instance of inhertied class 

// Readonly  properties
// agar appko class me agar koi attribute me value ko change hone  nahi dena hai to app readonly uses kar ssakte ho 

class Rakesh {
    constructor(public readonly name: string,) {
    }
    //  1. access modifier
    //  2. readonly

    //  changeName(){
    //     this.name = "kushwaha";
    //  }
    // constructor( readonly public  name: string,) {
    // } // gives error 
    //  tum change kar sakte ho tum ts error dega and js run kar dega 
}

let r1 = new Rakesh("hello");
// r1.changeName();
// console.log(r1.name);


//?  •Optional properties

// class Tree{
// constructor(public name?:string ,public gender?:string){
// }

// //  ? by using ? you can do optional properties 
// }
// let t1 = new Tree();
// let t2 = new Tree( , "male");
// console.log(t2);

// class Tree {
//     constructor({ name, gender }: { name?: string; gender?: string } = {}) {
//       this.name = name;
//       this.gender = gender;
//     }
  
//     public name?: string;
//     public gender?: string;
//   }
  
//   let t1 = new Tree();
//   let t2 = new Tree({ gender: "male" }); // Only passing gender
//   console.log(t2);
  
//  

// •Getters and setters
// •Static members
// private,
// protected)
// •Abstract classes and methods

// ? •Parameter properties
// class uCK {
//     constructor(public name: string, public age: number) {
//     }
//     // public name: string, public age: number ye chiz ko hum parameter properties kahte hai , qkii hum yusko acces modoier ko paramete me hii defince karre with name and also with dtype 
// }


//?  •Getters and setters

// getter yak yaise method vo varable ko access karke dedega 
//  setter yaise method vo variable ko change kar dega 

class UK{
    constructor(public _name:string , public age:number){
        //  _name : it is specialy that it means it is getter 
    }

    
    get name(){
        return this._name;
    }
//  agar apane setter nahi banaya hai but insstace value ko change karr hai to error dega ki the property is readonly property 

    set name(name:string){
        this._name = name;
    }
}

let uk1 = new UK("hello",12);
// console.log(uk1.name); 
// uk1.name="kushwaha";
// console.log(uk1.name);



//  static members

// class Sherry{
//     static version:string ="1.0.0";
//     constructor ( public versionins:string){
//         // Sherry.version=this.version;
//         this.versionins=Sherry.version;
//     }
// }
// let s1 = new Sherry("1.0.1");
// console.log(s1.versionins);



// •Abstract classes and methods
class Payment{
    constructor(protected amount:number, protected accountNo:number){     
    }
    isPaymentValid(){

        if(this.amount >0 && this.accountNo >0){
            return this.amount >0 ;
        }
    }
}
//  abstract class is essential  for creating clases , that is like the abstract  class has the base attributres and method , the abstract classes 
//  abstact class sse kavi hum insstance nahi banate hai 




