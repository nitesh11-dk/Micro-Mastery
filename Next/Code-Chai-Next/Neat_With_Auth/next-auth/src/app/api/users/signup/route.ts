import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest ,NextResponse} from 'next/server'
import bcrypt from 'bcryptjs'
import { sendEmail } from "@/utils/mailer";
export async function POST(request:NextRequest){
    try {
        
        const reqBody = await request.json();
        let {username , email, password} = reqBody;

        //validaton 
        console.log(reqBody)

           const user = await User.findOne({email});
           if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
           }

                const salt = bcrypt.genSaltSync(20);
                const hashedPassword = bcrypt.hash(password, salt);

                const newUser = new User({
                    username,
                    email,
                    password:hashedPassword
                
                })
               
                const savedUser = await newUser.save();
                console.log(savedUser);

                //send verification email here
                  await sendEmail({email, emailType:"verify", userId:savedUser._id});

                  return NextResponse.json({
                    message:"User created successfully",
                    success:true,
                    savedUser
                  })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

