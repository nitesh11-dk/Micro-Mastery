
// const page = ({params}) => {
//     console.log(params.name);
    
//   return (
//     <div>
//       this is {params.name}
//     </div>
//   )
// }

// export default page


const page = async ({ params }) => {
    const {name} = await params
    console.log(name);
    
  return (
    <div>
      this is {name}
    </div>
  )
}

export default page