import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import styles from '../../styles/NavbarStyles.module.css'

export function SignedInLinks(props) {
    return(
        <ul className="right">
            <li><NavLink to='/atlas-library' className={ styles.links }>Atlas Library</NavLink></li>
            <li><NavLink to='/my-library' className={ styles.links }>My Library</NavLink></li>
            <li><NavLink to='/quiz' className={ styles.links }>Quiz</NavLink></li>
            <li><a href="/#" onClick={ props.signOut } className={ styles.links }>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating z-depth-2 red lighten-2'>
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)