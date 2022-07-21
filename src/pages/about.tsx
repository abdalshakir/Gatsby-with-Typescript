import React from 'react';
import { Link } from 'gatsby'

function about() {
    return (
        <div>
            <h1>This is About page</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default about