import React from "react";

const Accordion=({item})=>{

    const newitem=item.map((item,index)=>{
      return(
         <div key={index}>
          <h1>My name is {item.name}</h1>
          <h2>my age is {item.ages}</h2>
         </div>
      );
    })
    return(
     <h1>{newitem}</h1>
    );
}


export default Accordion;