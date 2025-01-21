// In page.jsx, we shouldn't use named exports, only default exports are allowed for jsx only .

// If we create a layout inside a folder, it will be visible to all the children of that folder. And if the layout does not return its children, then nothing will be shown.
// +++++++++++++++++++
// export const app = 23; // if will work but jo main jsx ka copment hai vo deafult edport hona chhaiye 

// const MyProfile = () => {
    //   return (
        //     <div>page</div>
        //   )
        // }
// export default MyProfile
        // +++++++++++++++++++

// !  Route group means a folder inside the app folder. ()
//? For example, if you have a file `src/app/courses/java/page.jsx`, and you want the route to be `/java` instead of `/courses/java`, you can wrap the `(courses)` folder in a route group by adding parentheses around it.

// *  day - 2 

// !  Dynamic route  []
export const app = 23; // if will work but jo main jsx ka copment hai vo deafult edport hona chhaiye 

const MyProfile = async ({params}) => {
  let id = await params.id;
 console.log(id);
  return (
    <div>{id}</div>
  )
}

export default MyProfile
// ?  yaha par tutorial me async await use nahi kiya hai syd next update me  change huya  hoga 


//  ! catch all route [...name] optional rakhna hai to [[...name]]

// ?  Error: You cannot use both an required and optional catch-all route at the same level ("[...posts]" and "[[...posts]]" ). 
// ? qkii vo cahae ne jab jara hai to same lvel ho ho jara  hai then error milra hai 

//  ! Parallel routes  or conditional route render @ se folder na nam start hote hai 
//  * to define a slot we  use @ symbol 
//  yaha par appko conditional rendering ke liye code layout me likhana hota hai q kii pa yusko waha par hii access kar sakte ho 

// export default function ColorBoxLayout({children,left , right}){
//   const isright = true ;
  
//   return (
//      <>
//       {children}
//       {/* {left}
//       {right} */}
//       {isright ? right : left}
//      </>
//   )
// };

// ! layout file nam ka khel 
// bascally agar appke folfer baut sare  routes hai aur main page.jsx vhi hai  but agar appko header navabr bol sakte hai sare route par same rakhna hai  jo folder vo main folder me yander hai to app main folder me yak layout.jsx file banakar yusme children ko props se leke return kardo aur additonal vo layout par likh sakte ho jo jara children componenets par show ho okay 


//  ? LInkding stuff 
//  ? normally react jese hii hai but next se ayta hai , aur same as page relaod na hota hai 
import Link from "next/link"
export const LearnLink = () => {
    const id = 2 ;
  return (
    <div>
  <Link href={'/admin/dashboard'}>Go to admin Dashborad</Link> <br />
  <Link href={`/user/profile/${id}`}>Go to user profile </Link>
  {/* ? dynamic */}
    </div>
  )
}

// * Programaticlly navigate 
//  we can use userouter hook 
// but to use that we should first have too make out component as a client componenet 

'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";


export const LearnLink = () => {
    const router  = useRouter();
    const id = 2 ;
    console.log(router)
    if(true){
        router.push("/admin/profile")
    }
  return (
    <div>
  <Link href={'/admin/dashboard'}>Go to admin Dashborad</Link> <br />
  <Link href={`/user/profile/${id}`}>Go to user profile </Link>
  {/* ? dynamic */}


    </div>
  )
}
