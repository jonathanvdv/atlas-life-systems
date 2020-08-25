// This library should only contain favourited articles
import React, { Component } from 'react'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import { getFirestore } from 'redux-firestore'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

export class MyLibrary extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;

        // const firestore = getFirestore();

        var { myLibrary } = this.props;
        
        if(myLibrary !== undefined && myLibrary.length > 0) {
            myLibrary.map(id => this.props.firestore.collection("articles").doc(id))
        } else {
            myLibrary = []
        }
        console.log("myLibrary", myLibrary)
         
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