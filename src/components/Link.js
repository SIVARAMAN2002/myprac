import React from "react";


const Link=({className,href,children})=>{
    const onclick =(e)=>{
            e.preventDefault();
          window.history.pushState({},"",href)
          const newEvent =new PopStateEvent('popstate')
          window.dispatchEvent(newEvent);
    }

      return(
    <div>
      <a onClick={onclick} href={href} className={className}>
        {children}
      </a>
    </div>
  );
}

export default Link;