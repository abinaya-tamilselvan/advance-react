import React from 'react'
import {} from "../data";
import { Link,useParams} from 'react-router-dom';
import { tSExportAssignment } from '@babel/types';

 function person() {
     console.log(useParams());
     const {id} = useParams();
     useEffect(() => {
         const newPerson = data.find((person) => person.id ===parseInt(id));
         tSExportAssignment(newPerson.name)
     },[])
    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
                Back to Homepage
            </Link>
        </div>
    )
}
