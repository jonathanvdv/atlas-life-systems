// This component is the signIn page

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export class SignIn extends Component {
    state = { // initializes state
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({ // updates the state entry fields when typing and gets typed text
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => { // prevents default and calls signIn method
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        // authentication protocol
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to = '/' /> // if valid user, redirect to dashboard

        return (
            <div className = "container z-depth-1">
                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange = {this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange = {this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <button className = "btn red lighten-2 z-depth-0">Login</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null /* if theres an error, show to user */}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (authInfo) => dispatch(signIn(authInfo))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(SignIn)
