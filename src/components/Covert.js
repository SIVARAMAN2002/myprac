import axios from "axios";
import React,{useEffect,useState}from "react";


const Convert=(prop)=>{
  
    const language=prop.language
    const txt=prop.text
    const[res,setres]=useState("");
     const[textw,setrebounced]=useState(txt)
     
    useEffect(()=>{
      const timeo= setTimeout(()=>{
         setrebounced(txt)
       },500)
    
    
    return(()=>{
      clearTimeout(timeo)
    })
  }
    )

    useEffect(()=>{

    const search= async ()=>{
    const {data}=await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
      params:{
        q:textw,
        target:language.value,
        key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
      }
     })

     setres(data.data.translations[0].translatedText)
    }

    search()
    },[language,textw])


    return(
      <div>
        {res}
      </div>
    );

}

export default Convert;