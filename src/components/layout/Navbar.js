// This component is the navigation bar
import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect} from 'react-redux';
import styles from '../../styles/NavbarStyles.module.css';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


export function Navbar(props) {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return(
        <nav className={`nav-wrapper ${ styles.background }`}>
            <div className="container">
                <Link to = '/' className = {`left ${ styles.title }`} > 
                Atlas Life Systems</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
    )(Navbar)