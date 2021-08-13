import React from 'react'
import {data} from "../data";
import {link} from "react-router-dom";

function People() {
    const [people,setPeople] = useState(data);
    return (
        <div>
            <h1>People page</h1>
            {People.map((person) => {
                return (
                <div key={person.id} className="item">
                    <h4>{person.name}</h4>
                    <link to=`/person/${person.id}`></Link>
                </div>
                );

            })}
      </div>
    )
}
export default People
