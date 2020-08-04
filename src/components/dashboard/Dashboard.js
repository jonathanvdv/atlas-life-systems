// This component is currently the homepage of the application
import React, { Component } from 'react'
import Notifications from './Notifications'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component { 
    render () { 
        // console.log(this.props)
        const { articles } = this.props;

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
    console.log(state); 
    return { 
        articles: state.firestore.ordered.articles
     }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(Dashboard)