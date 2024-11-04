import { connectDb } from "@/dbConfig/dbConfig";
import {NextRequest ,NextResponse} from 'next/server'


connectDb();


export async function GET(request:NextRequest){
    try {
        
 let res  = NextResponse.json({
            message:"logout successfully" ,
            success:true
        })
        
        res.cookies.set("token","" , {
            httpOnly:true,
            expires: new Date(0)
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}

