import React, { useEffect, useState } from "react";


const Route=({path,children})=>{
    
   const[paths,currentPath]=useState(window.location.pathname)
    useEffect(()=>{

        const onEventChange=()=>{
           currentPath(window.location.pathname)
            
        }
      window.addEventListener('popstate',onEventChange);
      return()=>{
             window.removeEventListener("popstate",onEventChange);
    };
    },[])

    return window.location.pathname==path?children:null
}

export default Route;