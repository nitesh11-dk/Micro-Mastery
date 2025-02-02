'use client'

import { useEffect, useState } from "react";


const page = () => {
const [post,setPost]= useState({});
  
  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/posts');
      const data = await res.json(); 
      // console.log(data.result[0])
      setPost(data.result[0]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

useEffect(()=>{
  fetchPosts();
},[])
  
  return <div>
    {
      post &&<div>
         <h2>{post.title}</h2>
         <h2>{post.body}</h2>
      </div>
    }
  </div>;
};

export default page;
