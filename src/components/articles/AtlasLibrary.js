// This component is the ful atlas archive with all unfiltered articles
import React, { Component } from 'react'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class AtlasLibrary extends Component { 
    render () { 
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />
        const { articles } = this.props;
        // returns format for articles
        return (
            <div className="dashboard container">
                <div className="row">
                    <ArticleLibrary articles = { articles }/>
                </div>
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return { 
        articles: state.firestore.ordered.articles, // want to access articles
        auth: state.firebase.auth // need authentication info
     }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}, // need to access articles collection
        {collection: 'users'} // need access to user info such as authentication
    ])
)(AtlasLibrary)