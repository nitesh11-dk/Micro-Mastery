// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads

// function abcd( name:string , callback:function){} // un cannot usse function here so here function types comes in 

// ? function types 
function abcd( name:string , cb:(a:string)=>void){
    cb("heello");
}
// abcd("hellosse", (val)=>{
    //     console.log(val);});
    // abcd("hellosse", (val:string)=>{
        //     console.log(val);});
        // abcd("hellosse", function (val:string){
            //     console.log(val);
            // });
            
            // Optional and default parameters

            // function abcd2( name:string , age:number, gender:string  ){}
            // abcd2("nitessh", 12); // will give error her if gneder is not passed 
            
            // ?  Optional // by using ?
            function abcd2( name:string , age:number, gender?:string  ){}
            // abcd2("nitessh", 12); 
            
            // ? default parameters
            // function abcd3( name:string , age:number, gender:string = "male"  ){}
            // abcd3("nitessh", 12);
            
            
            //  ? default parameters and optional
            // function abcd3( name:string , age:number, gender?:string = "male"  ){}
            // abcd3("nitessh", 12, "female"); // you cannot do this like using deafult parameter as well as optional parameter at  same time
            
            
// Rest parameters

// ? Rest parameters
// function abcd4( ...nums:number[]){}    
function abcd4( ...name:string[]){}    
