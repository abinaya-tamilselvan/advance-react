import React ,{useState}from 'react'
//some basic rules of hooks
//useState is one of the hooks
//component name must be in upper case
//must be in function/component body
//can not call conditionally
//react fragment can also be written as <> </>


function UseStateBasic() {
    const [day,setDay] = useState("Today is a rainy day:(");
    const handleClick = ()=>{
        if(day=="Today is a rainy day:("){
        setDay("Today is a bright and beautiful day!")
        }
        else{
            setDay("Today is a rainy day:(")
        }
    };
    
    return (
     <div>
         <>
     <h1>{day}</h1>
     <button type="button" className="btn" onClick={handleClick}>
         Change my day
     </button>
     </>
     </div>
    )

}
export default UseStateBasic