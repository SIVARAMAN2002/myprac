import React, { useEffect, useState,useRef } from "react";

const DropDown=({stae,sets,item,label})=>{


 const ref=useRef();

  const[open,setOpen]=useState(false)

  useEffect(()=>{

    const bodyChange=(event)=>{
      if(ref.current.contains(event.target)&&ref.current){
        return;
      }
      setOpen(false)
     
    }
    document.body.addEventListener('click',bodyChange,{capture:true})

    return()=>{
      document.body.removeEventListener("click",bodyChange)
      console.log("return")
    }
  },[]
  
  
  )


    const renderdList=item.map((item)=>{
        return(
           <div key={item.name} onClick={()=>{
            sets(item)
           }}>
           {item.name}
            </div>
        );
  })

 const[setu,setOp]=useState(true)

return(
   <div ref={ref} className="ui from">
    <div className="field">

    <label className="label">{label}</label>
    </div>
  
    
      <div>
            <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open?"visible active":""}`}>
      <i className="dropdown icon"></i>
    <div className="text">{stae.name}</div>


   <div className={`menu ${open?"transition visible":""}`}>{renderdList}</div>
   </div>
     
  
   </div>
   

   </div>
  
 );

}
export default DropDown;