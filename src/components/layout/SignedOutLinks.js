// this component determines links when signed out
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/NavbarStyles.module.css'

export default function SignedOutLinks() {
    return(
        <ul className="right">
            <li><NavLink className={styles.links} to='/signup'>Sign Up</NavLink></li>
            <li><NavLink className={styles.links} to='/signin'>Sign In</NavLink></li>
        </ul>
    )
}
