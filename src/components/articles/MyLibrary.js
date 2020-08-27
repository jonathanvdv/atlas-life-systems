// This library should only contain favourited articles
import React, { Component } from 'react'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

export class MyLibrary extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;

        const { myLibrary } = this.props;
        const { articles } = this.props;
        // console.log("ml articles",articles);
        // console.log("mylibrary",myLibrary);

        var favs = [];

        if(myLibrary !== undefined && myLibrary.length > 0) {
            favs = myLibrary.map(id => articles.find(element => element.id === id)) 
        } else {
            favs = []
        }
        console.log("favs", favs)
         
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <ArticleLibrary articles = {favs} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state); 
    return { 
        articles: state.firestore.ordered.articles,
        myLibrary: state.firebase.profile.myLibrary,
        auth: state.firebase.auth
     }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'},
        {collection: 'users'}
    ])
)(MyLibrary)
