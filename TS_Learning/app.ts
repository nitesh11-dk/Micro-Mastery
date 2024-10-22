// Basic Types
// •Primitive types (number,
// string,
// boolean)
// •Arrays
// •Tuples
// •Enums
// •Any, Unknbwn,
// Void,
// Null,
// Undefined,
// Never

// let a =12;
// a=""

// *  array
// ? let arr = [1,2,3, {name:"kushwaha"}]
//? let arr: number[] = [1, 2, 3, 4 , "hello"]

// * tuple

// let arr: [number, string] = [1, "hello"];
let arr: [number, string] = [1, "hello"];

// ? Enums enumerations

enum UserRole {
    ADMIN = 1,
    READ_ONLY = 2,
    AUTHOR = 3
}

// predefined  values likhne ke liye pahala  se data set 


// ? TYpe define karna 

//  ? Any , type ke ssat typescript off ho jata hai
// let a : number ; // --> here  type isnumber
//  let a ; // --> here  type is any

let a ;
a= 12 
a = "hello"

// if(typeof a === 'string'){
//     a.// all string method 
// }

//  ? Unknown 


//  unknown me variable me number sstring kuch vhi define to kar sakte ho but , jab yus variable ko use karna hai to pahale yuska type check karna padata hai 
let b: unknown;
b = 12;
b = "hello";

// if(typeof b === 'string'){
//     b.endsWith("l")// all string method 
// }

//  ? Void
// agar function kuch return nahi karra hai to function ko void batayo 

// function abcd() : void{
//     console.log("hello");
// }

// function abcd() : number{
//     console.log("hello");
//     return 1
// }

// function abcd() : string{
//     console.log("hello");
//     return "hello";
// }

//  ? NUll
// let bs :null ;
// bs = 12; // error dedega so we can use unions 
// let bs :string | null = null;
// bs = "hello";
// bs =34;

// ? undefined 

// ?Never ; yese kcuh code jo age ka code nahi chalane dege ya infinite loops to hum yunka retrun type bolte hai never 

// function abcd2() : never{
//     while(true){
//         console.log("hello");
//     }
// }
// abcd2()
// console.log(23)

// +  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type Inference
// •Understanding type inference
// •Type annotations

// ? Type Inference
//  like app jab varible decelare  aur initilize karte ho to type script ko pata chal jata hai kii yus varible ka type kya hai 

//  ? Type annotations
// let a32 : number | string ;
// a32 = "hello";
// a32 = 12;

//  ? function ke liye 
// function abcd23( a : number | string  , bc:boolean | number):number {
//     return 1
// }

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Interfaces and Type Aliases

// •Defining interfaces
// •Extending interfaces
// •Using interfaces to define object shapes , object ka format 

// •Type aliases
// •Intersection types

// ?  Interfaces and Type Aliases
// •Defining interfaces

// function a2z(a:number , b:string){
// // a. // you will see method releated with numberss 
// // b. // you will see method releated with string
// }

// function userdata(obj){
//     obj. // abb yaha to pata nahi hai na obje ke yander kya kya hoga so yiske liye hum uses karefge Interface 
// }

interface User {
    name:string ,
    age: number ,
    password:string ,
    // for making optional we can use ? 
    gender?:string
}

function userdata(obj:User){    
    obj
}
// ?  default value 
// function userdata(obj:User ={name:"kushwaha" , age:12 , password:"123"}){    
//     obj
// }
userdata({name:"kushwaha" , age:12 , password:"123"});


//? Extending interfaces
interface Admin extends User {
    admin:boolean ;
}
function userdata2(obj:Admin){    
    
}

// ?  merging same Interface 

interface ads {
    name:string;
}
interface ads {
    age:number
}
//  so now both the ads are merges not replaced by one another
// function afs(obj : ads){    
//        obj. // you can access name as well as age 
// }


// •Type aliases
// •Intersection types

//  to create a coustom type type aliases is used 

// let k: number | string | boolean ;
//  insstead 

// type val = number | string | boolean ;
// let  k : val ;

//  union types

type Users ={
    name:string ,
    age:number
}

type Admin23 = Users & {
    admin:boolean
} 
// intersection types
// type val = number | string | boolean ; // -> here you are using | this is called as intersetion lly to or gate 

//  here we are confused like interface and alias are 80% similarr ,and we can use them in therri place of each other

//  but there is the key difference in inteface and aliases 

// type zkj = number | string | boolean ;
// type zkj = number | string | boolean ;
// //  now type will give error 

// // but in  interface they get merge 
// interface Users2 {
//     name:string
// }
// interface Users2 {
//     age:number
// }

// 2  difference 
//  type ka kam type create karna ,string number ;
//    interface is ued to crate the format or shape of the obejct 

