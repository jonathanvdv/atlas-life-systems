// This component should request detailed article information
import React from 'react';
import { addFavorite, removeFavorite } from '../../store/actions/articleActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import styles from '../../styles/ArticleStyles.module.css'

export function ArticleDetails(props) {
    
    const { auth } = props;
    if (!auth.uid) return <Redirect to = '/signin' />
    
    const  article   = props.location.state.article;
    const { myLibrary } = props;
    const articleIsInMyLibrary = (myLibrary !== undefined && myLibrary.filter((e) => e === article.id).length > 0) ? true : false;
    
    var buttonText =  articleIsInMyLibrary ? "-" : "+";
    var buttonColor =  articleIsInMyLibrary ? "grey lighten-2" : "red lighten-2";
    var buttonClassName = `right btn ${buttonColor} z-depth-0 ${styles.button}`;

    function handleSubmit(e) {
        e.preventDefault();
        return (articleIsInMyLibrary) ? props.removeFavorite(article) : props.addFavorite(article);
    }
    
    // Conditional field rendering - checks if article property exists/is not null
    var taskExists =  (article.wellnessTasks.length > 0 && article.wellnessTasks !== undefined) ? true : false;
    // var refFindingsExists = (article.referencedFindings.length > 0 && article.referencedFindings !== undefined) ? true : false;
    return (
        
        <div className="container section article-details">
            <form onSubmit={ handleSubmit } className="white z-depth-1">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <button className={ buttonClassName } onSubmit={ handleSubmit }>{ buttonText }</button>
                        {articleIsInMyLibrary ? (
                                <span className={`${styles.savedTitle}`}>{ article.title }</span>
                            ) : (
                                <span className={`${styles.unsavedTitle}`}>{ article.title }</span>
                        )}
                        <div className="card-action grey-text">
                            <div>Authors: { article.authors.map(function (author, index) {
                                return <span>{(index ? ", " : '') + author}</span>
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
                                return <li>{finding}</li>
                            }
                            )}
                        </p>
                    </div>
                    <div className="wellnessTask-list section">
                    <div><b className={styles.header}>Wellness Tasks:</b></div>
                                {/* <br></br> */}
                                <div className={`row ${styles.tasks}`}>
                                        {taskExists ? (
                                                article.wellnessTasks.map( 
                                                    task => {
                                                        return <div className="col s4">{task}</div>
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
