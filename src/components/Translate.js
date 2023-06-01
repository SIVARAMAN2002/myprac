import React,{useState} from "react";
import DropDown from "./DropDown";
import Convert from "./Covert";
const values=[
    {
        name:"Africa",
        value:"af"
    },
    {
        name:"America",
        value:"am"
    },{
        name:"hindhi",
        value:"hi"
    }

]



const Translate=()=>{
    const [language,setLanguage]=useState(values[0])
    const [text,setText]=useState("");


    return(
     <div>
      <div className="ui form">
       <div className="ui field">
          <label>Enter a text</label>
          <input  value={text} onChange={(e)=>{
            setText(e.target.value)
          }}/>
       </div>
       
      </div>    
        <DropDown label="enter a language" stae={language} sets={setLanguage} item={values}/>


    <hr>
    </hr>

    <h2>Output</h2>
    <Convert language={language} text={text}/>
     </div>
   

    );
}

export default Translate;