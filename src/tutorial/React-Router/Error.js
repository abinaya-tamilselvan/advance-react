import React from 'react'
import {Link} from "react-router-dom";
function Error() {
    return (
        <div>
            <h1>Page not found 404 Error</h1>
            <link to="/Home" className="btn">Back to Homepage</link>
        </div>
    )
}
export default Error
