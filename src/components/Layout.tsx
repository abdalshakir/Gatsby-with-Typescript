import React, { Children, ReactNode } from 'react';
import { Link } from 'gatsby'

type LayoutProp = {
    children: ReactNode
}

function Layout({ children }: LayoutProp) {
    return (
        <div>
            <h4>This our NavBar</h4>
            <Link to='/about'>About Page</Link>

            {children}
        </div>
    )
}

export default Layout