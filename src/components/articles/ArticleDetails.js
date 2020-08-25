// This component should request detailed article information
import React from 'react';
import { addFavorite, removeFavorite } from '../../store/actions/articleActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


export function ArticleDetails(props) {
    const { auth } = props;
    if (!auth.uid) return <Redirect to = '/signin' />
    
    const  article   = props.location.state.article;
    const { myLibrary } = props;
    const articleIsInMyLibrary = (myLibrary !== undefined && myLibrary.filter((e) => e.id === article.id).length > 0) ? true : false;
    // console.log('myLibrary', myLibrary);
    // console.log('articleIsInMyLibrary', articleIsInMyLibrary);
    
    var buttonText =  articleIsInMyLibrary ? "-" : "+";
    var buttonColor =  articleIsInMyLibrary ? "grey lighten-2" : "red lighten-2";
    var buttonClassName = `right btn ${buttonColor} z-depth-0`;

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('myLibrary', myLibrary);
        // console.log('articleIsInMyLibrary', articleIsInMyLibrary);
        return (articleIsInMyLibrary) ? props.removeFavorite(article) : props.addFavorite(article);
    }

    return (
        <div className="container section article-details">
            <form onSubmit={ handleSubmit } className="white">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <button className={ buttonClassName } onSubmit={ handleSubmit }><b>{ buttonText }</b></button>
                        <span className="card-title">{ article.title }</span>
                        <div className="card-action grey-text">
                            <div>Authors: { article.authors.map((author) => author + " " )} </div>
                            <div>Published: { article.date } </div>
                        </div>
                        <p>{ article.summary }</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myLibrary: state.firebase.profile.myLibrary,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (article) => dispatch(addFavorite(article)),
        removeFavorite: (article) => dispatch(removeFavorite(article))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(ArticleDetails)
