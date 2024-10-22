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
var arr = [1, "hello"];
// ? Enums enumerations
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 1] = "ADMIN";
    UserRole[UserRole["READ_ONLY"] = 2] = "READ_ONLY";
    UserRole[UserRole["AUTHOR"] = 3] = "AUTHOR";
})(UserRole || (UserRole = {}));
// predefined  values likhne ke liye pahala  se data set 
// ? TYpe define karna 
//  ? Any , type ke ssat typescript off ho jata hai
// let a : number ; // --> here  type isnumber
//  let a ; // --> here  type is any
var a;
a = 12;
a = "hello";
// if(typeof a === 'string'){
//     a.// all string method 
// }
//  ? Unknown 
//  unknown me variable me number sstring kuch vhi define to kar sakte ho but , jab yus variable ko use karna hai to pahale yuska type check karna padata hai 
var b;
b = 12;
b = "hello";
function userdata(obj) {
    obj;
}
// ?  default value 
// function userdata(obj:User ={name:"kushwaha" , age:12 , password:"123"}){    
//     obj
// }
userdata({ name: "kushwaha", age: 12, password: "123" });
function userdata2(obj) {
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
