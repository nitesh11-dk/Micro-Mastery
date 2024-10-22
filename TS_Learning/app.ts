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

