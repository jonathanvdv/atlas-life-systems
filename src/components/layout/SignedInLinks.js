import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInLinks() {
    return(
        <ul className = "right">
            <li><NavLink to ='/library'>Library</NavLink></li>
            <li><NavLink to ='/my-library'>My Library</NavLink></li>
            <li><NavLink to = '/quiz'>Quiz</NavLink></li>
            <li><NavLink to ='/'>Log Out</NavLink></li>
            <li><NavLink to ='/' className = 'btn btn-floating red lighten-2'>DJ</NavLink></li>
        </ul>
    )
}