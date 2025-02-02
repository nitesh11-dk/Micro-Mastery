import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    }
})

const Post   =mongoose.model.Post ||mongoose.model('Post',postSchema)
//  yese yis liye likha hai ekuu ki next js edge par chalta hai 
//   to yusko pata nahi chalta  ki database kitne bar connect huya hai , so hum pahale check kar llete hai ki kya vo model exist to nahi karta  hai  
export default Post;
