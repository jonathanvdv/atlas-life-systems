// This library should only contain favourited articles
import React, { Component } from 'react';
import ArticleLibrary from '../articles/ArticleLibrary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

export class MyLibrary extends Component {

    render() {
        // authentication protocol
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;
        // variable declaration
        const { myLibrary } = this.props;
        const { articles } = this.props;
        var favs = []; // declare empty array if declared without "= []" then datatype is unknown

        if(myLibrary !== undefined && myLibrary.length > 0) { // if first time creating - myLibrary is undefined, and if it is emptied, then myLibrary length === 0
            // map is react's for loop for arrays. can NOT be used on objects
            favs = myLibrary.map(id => articles.find(element => element.id === id)) // finds articles with ids in myLibrary and displays those - for ids in myLibrary find in articles articles with matching id
        } else {
            favs = []
        }
        // returns article formatting         
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
    return { // pass necessary properties from state to props
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
