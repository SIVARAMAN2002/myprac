import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
const SearchList=()=>{
    const[sear,mySear]=useState('');
     const[results,setResult]=useState([]);

   

    console.log(results);
       useEffect(()=>{
        const search=async()=>{
        const {data}=await axios.get("https://en.wikipedia.org/w/api.php",{
            params:{
                action:"query",
                list:"search",
                format:"json",
                origin:"*",
                srsearch:sear
            }
         });
         setResult(data.query.search);
        }
        
        if(sear&& !results.length){
          search()
        }
        else{    
          const times=setTimeout(()=>{
            if(sear){
                search();
                 }
         },1000)

         return()=>{
            clearTimeout(times);
         }
        }
       
},[sear]);

          const renderdList=results.map((result)=>{
            return(
               <div>
                 <h3>{result.title}</h3>
                 <br/>
                 <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
             
                </div>
            );
      })

    return(
       <div>
       
        <input type="text" onChange={(e)=>{
            mySear(e.target.value)
        }}/>
        {renderdList}
        
       </div>
    );
}


export default SearchList;