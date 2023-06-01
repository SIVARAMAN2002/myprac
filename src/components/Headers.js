import React from "react";
import Link from "./Link";

const Headers=()=>{

    return(
     <div className="ui secondary pointing menu">
        <Link href="/" className="item">
            Accordion
        </Link>
        <Link href="/searchlist" className="item">
            SearchList
        </Link>
        <Link href="/dropdown" className="item">
            DropDown
        </Link>
        <Link href="/translate" className="item">
            Translate
        </Link>

     </div>
    );
}

export default Headers;