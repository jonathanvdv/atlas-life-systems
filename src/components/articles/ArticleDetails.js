// This component displays detailed article information
// allows users to save article to my-library

import React from 'react';
import { addFavorite, removeFavorite } from '../../store/actions/articleActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import styles from '../../styles/ArticleStyles.module.css'

export function ArticleDetails(props) {
    // checks authentication status and redirects to signin page if invalid
    const { auth } = props;
    if (!auth.uid) return <Redirect to = '/signin' />
    
    const  article   = props.location.state.article; // gets the active article you are viewing
    const { myLibrary } = props; // gets your myLibrary
    const articleIsInMyLibrary = (myLibrary !== undefined && myLibrary.filter((e) => e === article.id).length > 0) ? true : false; // boolean to check if article is already in myLibrary
    
    // Changes button color based on articleIsInMyLibrary
    var buttonText =  articleIsInMyLibrary ? "-" : "+";
    var buttonColor =  articleIsInMyLibrary ? "grey lighten-2" : "red lighten-2";
    var buttonClassName = `right btn ${buttonColor} z-depth-0 ${styles.button}`;

    function handleSubmit(e) {
        e.preventDefault(); // handleSubmit is a keyword i believe need to prevent default functionality
        return (articleIsInMyLibrary) ? props.removeFavorite(article) : props.addFavorite(article); // remove if exists, add if does not
    }
    
    // Conditional field rendering - checks if article property exists/is not null - not all articles have all properties. may need to add more
    var taskExists =  (article.wellnessTasks.length > 0 && article.wellnessTasks !== undefined) ? true : false;
    // var refFindingsExists = (article.referencedFindings.length > 0 && article.referencedFindings !== undefined) ? true : false;
    return (
        // since a function return ~== render
        <div className="container section article-details">
            <form onSubmit={ handleSubmit } className="white z-depth-1">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <button className={ buttonClassName } onSubmit={ handleSubmit }>{ buttonText }</button>
                        {articleIsInMyLibrary ? (
                                <span className={`${styles.savedTitle}`}>{ article.title }</span> // use custom styling
                            ) : (
                                <span className={`${styles.unsavedTitle}`}>{ article.title }</span>
                        )}
                        <div className="card-action grey-text">
                            <div>Authors: { article.authors.map(function (author, index) {
                                return <span>{(index ? ", " : '') + author}</span> // adds commas to authors excluding last author
                                }) 
                            }
                            </div>
                            <div>Published: { article.date } </div>
                        </div>
                    </div>
                    <div>
                        <b className={styles.header}>Summary:</b>
                        <p>{article.summary}</p>
                    </div>
                    <div>
                        <b className={styles.header}>Referenced Findings:</b>
                        <p>
                            {article.referencedFindings.map(finding => {
                                return <li>{finding}</li> // creates list of referenced findings
                            }
                            )}
                        </p>
                    </div>
                    <div className="wellnessTask-list section">
                    <div><b className={styles.header}>Wellness Tasks:</b></div>
                                <div className={`row ${styles.tasks}`}>
                                        {taskExists ? (
                                                article.wellnessTasks.map( 
                                                    task => {
                                                        return <div className="col s4">{task}</div> // utilizes materialize.css to format into 3 columns
                                                    }
                                                )
                                            ) : (
                                                <div>There are no wellness tasks for this article</div>
                                            )
                                        }
                                </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => { // maps the state to the properties so it can be called in function
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

export default compose( // composes multiple connects so react knows what to do with them
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(ArticleDetails)
