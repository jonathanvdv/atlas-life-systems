import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/NavbarStyles.module.css'

export default function SignedOutLinks() {
    return(
        <ul className="right">
            <li><NavLink to='/signup' className={ styles.signedOutLinks }>Sign Up</NavLink></li>
            <li><NavLink to='/signin' className={ styles.signedOutLinks }>Sign In</NavLink></li>
        </ul>
    )
}
