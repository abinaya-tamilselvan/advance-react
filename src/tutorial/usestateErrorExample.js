import React,{useState} from 'react'

function UseStateErrorExample() {
    let title = "random title";
    const handleClick = (b) =>{
        let c=b;
        console.log(c);
    }
    return (<React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick(2)}>
          change title
        </button>  
    </React.Fragment>
        
    );
};
export default UseStateErrorExample
