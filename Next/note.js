
// ?  routing is file system based 

// ?* Routes
//  like 
//  its important to write page.jsx file name becuse it is server component 
//  app --> / route hoga 
// ? app/products/ --> /products route hoga

// * Nested 
//?  app/users/profile --> so route hoga /users/profile

// * Route group 
//  like you crated  app/course/java/page.jsx  so the route will be /course/java , but you want it shoul show on /java the middle folder should not be included so you can name the folder with in the () parenthesis /app/(course)/java/page.jsx -- so now the route will be /java

// * Dynamic routing 
//  man lo tumhe app/users/profile/[id]/page.jsx  file stcutre hai then route will be /users/profile/1 or any dynamic content  ,
//  vo folder ka nam [] me hii likhan hai vo nam likha hoga vo hii tume page.jsx ke prameter value mileaga jese kii yaha id likhat o hai to wha key vo milega vo hoga id hoga

//  ? params 

//  app/users/profile/[name]/page.jsx  then route will be /users/profile/nitesh


// const page = ({params}) => {
//     console.log(params.id);
    
//   return (
//     <div>
//       this is 
//     </div>
//   )
// }

// export default page

// will get some warming :
// Error: Route "/users/profile/[name]" used `params.name`. `params` should be awaited before using its properties. Learn more: 

//  so use 
// npx @next/codemod@canary next-async-request-api .


// const page = async ({ params }) => {
//     const {name} = await params
//     console.log(name);
    
//   return (
//     <div>
//       this is {name}
//     </div>
//   )
// }

// export default page






// ? next js is frame work so 

//  * component  name should be capital 
//  * server component ko named export nahi karna hai deafult hii kanra hai 
