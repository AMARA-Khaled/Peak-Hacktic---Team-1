import React from "react";
const Page = () => {
    return (
   <>
         
         
     <div className="flex flex-row justify-center  bg-[#E0D0B7] h-[100vh]">
<div className="bg-[#7A94CB] w-[50%] rounded-r-[200px]">
<img src="src\assets\Group 73.svgalt="  alt="logo"/>

</div >
{/* info */}
<div className=" w-[50%]  ">  
  <div className="flex flex-col gap-10">
<p>SIGN IN</p>
<div className="h-[1px]  bg-black"></div>
<input> Email</input>
<div className="h-[1px]  bg-black"></div>
<p>Password</p>
<div className="h-[1px]  bg-black"></div>
</div>
{/* info */}
<p className="text-end">forgot the password ?</p>
<div className="flex justify-end w-full">
  <img src="src/assets/Group 66.svg" alt="logo" className="w-16" />
</div>

</div> 
     </div>
    
  </>

           );
        };
        
        export default Page;
        