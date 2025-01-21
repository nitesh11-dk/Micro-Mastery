// Next.js is a powerful React framework that enables developers to build server-rendered applications with ease. It offers features like automatic code splitting, optimized performance, and a file-based routing system, making it a preferred choice for many developers. Next.js enhances the development experience by providing built-in support for static site generation (SSG) and server-side rendering (SSR), which can lead to better SEO and faster load times compared to traditional client-side rendered applications.

// File Structure:
// src/
// └── app/
//     ├── courses/
//     │   └── java/
//     │       └── page.jsx
//     ├── admin/
//     │   └── dashboard.jsx
//     └── user/
//         └── profile/
//             └── [id].jsx

// In page.jsx, we shouldn't use named exports; only default exports are allowed for JSX files.

// If we create a layout inside a folder, it will be visible to all the children of that folder. If the layout does not return its children, then nothing will be shown.

// ! Route group means a folder inside the app folder.
// ? For example, if you have a file `src/app/courses/java/page.jsx`, and you want the route to be `/java` instead of `/courses/java`, you can wrap the `(courses)` folder in a route group by adding parentheses around it.

// ! Dynamic route []
const MyProfile = async ({ params }) => {
  let id = await params.id;
  console.log(id);
  return (
    <div>{id}</div>
  );
};

export default MyProfile;

// ? Note: The tutorial may not have used async/await, but it might have changed in the latest Next.js updates.

// ! Catch-all route [...name] should be optional to use [[...name]]

// ? Error: You cannot use both a required and optional catch-all route at the same level ("[...posts]" and "[[...posts]]"). 
// ? This error occurs when both routes are defined at the same level.

// ! Parallel routes or conditional route rendering start with the @ symbol.
// * To define a slot, we use the @ symbol.
// Conditional rendering code should be written in the layout since it can only be accessed there.

// ! Layout file naming convention
// If your folder has many routes and the main page.jsx is the same, but you want to keep the header/navigation consistent across all routes, create a layout.jsx file in the main folder. Pass the children as props and return them, along with any additional layout elements you want to show across child components.

// ? Linking stuff
// ? Next.js routing works similarly to React, but it does not cause a full page reload.
import Link from "next/link";

export const LearnLink = () => {
  const id = 2;
  return (
    <div>
      <Link href={'/admin/dashboard'}>Go to Admin Dashboard</Link> <br />
      <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
      {/* ? dynamic */}
    </div>
  );
};

// * Programmatically navigate
// We can use the useRouter hook, but to use that, we must first make our component a client component.

// 'use client'
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export const LearnLink = () => {
//     const router = useRouter();
//     const id = 2;
//     console.log(router);
//     if (true) {
//         router.push("/admin/profile");
//     }
//     return (
//         <div>
//             <Link href={'/admin/dashboard'}>Go to Admin Dashboard</Link> <br />
//             <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
//         </div>
//     );
// };

// ! Server component vs Client component
