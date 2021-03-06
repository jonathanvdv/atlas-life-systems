import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


export function SignedInLinks(props) {
    return(
        <ul className = "right">
            <li><NavLink to ='/atlas-library'>Atlas Library</NavLink></li>
            <li><NavLink to ='/my-library'>My Library</NavLink></li>
            <li><NavLink to = '/quiz'>Quiz</NavLink></li>
            <li><a href = "/#" onClick = {props.signOut}>Sign Out</a></li>
            <li><NavLink to ='/' className = 'btn btn-floating red lighten-2'>
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