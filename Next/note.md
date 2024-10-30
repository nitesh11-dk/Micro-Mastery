# Next.js Notes


**Next.js** is a React framework for building fast web applications with features like file-based routing, server-side rendering, static site generation, and API routes. It’s optimized for performance and SEO, making it ideal for various web projects.

## Comparison Between React and Next.js

| Feature                   | React                                         | Next.js                                                     |
|---------------------------|-----------------------------------------------|-----------------------------------------------------------|
| **Type**                  | Library for building UIs                      | Framework for server-side rendering and static site generation |
| **Routing**               | Manual setup with libraries like React Router | File-system based routing                                   |
| **Data Fetching**         | Client-side rendering                         | Supports both server-side rendering and static generation   |
| **SEO**                   | Requires manual optimization                  | Better SEO out-of-the-box due to server-side rendering      |
| **Performance**           | Can be optimized manually                     | Built-in optimizations for performance                       |
| **API Routes**            | Not available                                 | Built-in API routes for server-side functionality           |

---

## Next.js Routing Overview

### Next.js File Naming Conventions

#### 1. Page Component Naming
- **File Name Requirement**: In Next.js, any file intended to define a route must be named `page.jsx` or `page.tsx` (for TypeScript).
- **Purpose**: This naming convention is crucial because Next.js recognizes the `page.jsx` file as a route handler and renders it accordingly. 
- **Note**: `page.jsx` in Next.js is a **server component** that runs on the server, enabling server-side rendering and data fetching for better performance and SEO.

### 2. File System-Based Routing
- **Description**: Routes are determined by the file structure in the `app` directory.
- **Example**: 
  ```plaintext
  app/
  └── page.jsx              // Route: /
  ```

### 3. Routes
- **Home Route**: 
  ```plaintext
  app/
  └── page.jsx              // Route: /
  ```
- **Product Route**: 
  ```plaintext
  app/
  └── products/
      └── page.jsx          // Route: /products
  ```

### 4. Nested Routes
- **Description**: Create routes based on folder hierarchy.
- **Example**: 
  ```plaintext
  app/
  └── users/
      └── profile/
          └── page.jsx      // Route: /users/profile
  ```

### 5. Route Groups
- **Description**: Use parentheses to hide folders from the URL.
- **Example**: 
  ```plaintext
  app/
  └── (course)/
      └── java/
          └── page.jsx      // Route: /java
  ```

### 6. Dynamic Routing
- **Description**: Use brackets `[]` for dynamic segments in routes.
- **Example**: 
  ```plaintext
  app/
  └── users/
      └── profile/
          └── [id]/
              └── page.jsx  // Route: /users/profile/[id]
  ```

### 7. Params
**Params** in Next.js are dynamic route parameters that capture values from the URL. For example, in a file named `[name].jsx`, if the URL is `/users/john`, the `name` param would be `john`. They are used to render dynamic content in your components.

- **Description**: Access dynamic parameters in the component.
- **Example**:
  ```javascript
  const Page = ({ params }) => {
    const { name } = params;
    return <div>This is {name}</div>;
  };
  ```

#### Error Handling
If you encounter the following error:

```plaintext
Error: Route "/users/profile/[name]" used `params.name`. `params` should be awaited before using its properties. Learn more:
```

- **Fix Command**:
  ```bash
  npx @next/codemod@canary next-async-request-api .
  ```

- **Updated Component**:
  ```javascript
  const page = async ({ params }) => {
    const { name } = await params;
    console.log(name);
    
    return (
      <div>
        This is {name}
      </div>
    );
  };

  export default page;
  ```

--- 

### Considerations When Using Next.js
- **File Structure**: Follow routing conventions based on the file structure.
- **Component Naming**: Use capitalized names for components.
- **Server Components**: Named `page.jsx`; use default exports only.
- **Client Components**: Understand the differences and appropriate use cases.
- **Dynamic Routing**: Use brackets `[]` for dynamic segments and ensure to await `params`.
- **SEO Optimization**: Leverage server-side rendering for improved SEO.
- **Server components must use default exports**.

---
