// This component creates a navigation bar
import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export function Navbar() {
    return(
        <nav className="nav-wrapper blue lighten-2">
            <div className="container">
                <Link to = '/' className = "left brand-logo">Atlas Life Systems</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state); 
//     return {
        
//     }
// }

export default /*connect(mapStateToProps)*/(Navbar)