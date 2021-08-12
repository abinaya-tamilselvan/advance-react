import React ,{useState} from 'react'
function UseStateObject(){
    const [person,setPerson] = useState(
        {
            name:"star Lord" ,
            age:50,
            message:"I am a God",
        }
    );
    const [name,setName] = useState("Tony stark")
    const [age,setAge] = useState(45)
    const [message,setMessage] = useState("I am a IronMan")
    const changeMessage =() =>{
        setPerson({...person,message:"not anymore"});
        setMessage("Hello World");
    }
    return (
        <div>
            <>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className = "btn" onClick={changeMessage}> change Message </button>
            </>
        </div>
    )
    
}
export default UseStateObject