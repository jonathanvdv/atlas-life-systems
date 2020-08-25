// This library should only contain favourited articles
import React, { Component } from 'react'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class MyLibrary extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;
        const { myLibrary } = this.props;


        return ( 
            <div className="dashboard container">
                <div className="row">
                    <ArticleLibrary articles = { myLibrary }/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myLibrary: state.firebase.profile.myLibrary,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MyLibrary)