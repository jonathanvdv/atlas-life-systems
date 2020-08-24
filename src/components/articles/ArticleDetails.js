// This component should request detailed article information
import React from 'react';
import { addFavorite } from '../../store/actions/articleActions';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


export function ArticleDetails(props) {
    const { auth } = props;
    if (!auth.uid) return <Redirect to = '/signin' />
    
    const article  = props.location.state.article;
    const { myLibrary } = props;
    const articleIsInMyLibrary = (myLibrary && myLibrary.filter(e => e.id === article.id)) ? true : false;
    // console.log(articleIsInMyLibrary);
    
    var buttonText = "Favorite";// articleIsInMyLibrary ? "Saved" : "Favorite";
    var buttonColor = "red lighten-2";// articleIsInMyLibrary ? "grey lighten-2" : "red lighten-2";
    var buttonClassName = "right btn " + buttonColor + " z-depth-0";

    function handleSubmit(e) {
        e.preventDefault();
        console.log(myLibrary);
        console.log(articleIsInMyLibrary);
        return articleIsInMyLibrary ? null : props.addFavorite(article);
    }

    return (
        <div className="container section article-details">
            <form onSubmit={ handleSubmit } className="white">
                <div className="card z-depth-0">
                    <div className="card-content">
                    <button className = { buttonClassName } onSubmit={ handleSubmit }>{ buttonText }</button>
                        <span className="card-title">{ article.title }</span>
                        <div className="card-action grey-text">
                            <div>Authors: { article.authors.map((author) => author + " " )} </div>
                            <div>Published: </div>
                        </div>
                        <p>{ article.content }</p>
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
        addFavorite: (article) => dispatch(addFavorite(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails)
