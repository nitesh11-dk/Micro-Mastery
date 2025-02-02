
// ?  Backend started 

// import Head from "next/head"
import { NextResponse } from "next/server"

export async function GET(req){
// for reponse 
//! Headers 
const headers = new Headers(req.headers)

// !Query Parameters 
//? const {searchParams} = new URL(req.url)
const searchParams = req.nextUrl.searchParams
// console.log(searchParams)
// console.log(searchParams.get("hello"))


return NextResponse.json({message:"hello kese ho "})
}

export async function POST(req){
    
    // request  body 
    // const {name,age} = await req.json();
    // console.log(name,age)

    // ? form data
//    const {name} = await req.formData(); // using like this giving undefined so ,
const formData= await req.formData();
console.log(formData.get('name')) // you will get the res


    
    return NextResponse.json({message:"hello kese ho post method "},{status:201})
} 

//  ! Dynamic routing 
// [proternameyouwnat] , that  will the folder name for that 

//! Api hitting 
//  If we're hitting any 3rd party api so instead of writing in front end we can try it in our bracket route .js folder so the third party api key then the password will be secure due to we are writing in our backend and then we are sending that back end in our front end by creating a api