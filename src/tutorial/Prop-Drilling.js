
import React from 'react'
import {data} from "./data"
function PropDrilling(){
    const [people,setPeople] = useState(data);
    const removePerson = (id) =>{
        return people.filter((person)) => person.id!=id)
    }
    return (
        <>
         <section>
             <h3>prop drilling</h3>
             <List people = {people} removePerson={removePerson} />
         </section>
        </>
    )
}
const List =({people}) =>{
    return <>
    {
        people.map((person) => {
             return <SinglePerson key={person.id} {...person}
             removePerson={removePerson}/>;
        })
    }
    </>
}
const SinglePerson = ({id,name,removePerson}) =>{
    return <div className ='item'>
        <h4>{name}</h4>
        <button onClick ={()= > removePerson(id)}>remove</button> 
    </div>
}
export default propDrilling