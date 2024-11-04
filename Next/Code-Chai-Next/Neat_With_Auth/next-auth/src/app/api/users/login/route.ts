import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
connectDb();

export async function POST(request: NextRequest) {
   try {
    const reqBody = await request.json();
    let { email, password} = reqBody;
    
   
let user =  await User.findOne({email:email});

if(!user){
    return NextResponse.json({error:"the user do not exist with this email" , success:false})
}

let  validPass = bcrypt.compare(password ,user.password) ; 

if(!validPass){
    return NextResponse.json({error:"the credential is wrong " , success:false})
}

//   now we will generate jwt to store the data or token in cookie 

let tokenData = {
  id:user._id ,
  username:user.username,
  email:user.email 
} ;
let token = jwt.sign(tokenData , process.env.TOKEN_JWT! , {expiresIn:'1d'})

let response = NextResponse.json({
    success:true,
    message:"logged in successfully done"
})

response.cookies.set("token",token,{
    httpOnly:true
})

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ error: "Invalid token" , status:400 });

   }

}
