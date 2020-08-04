// This component should request detailed article information
import React from 'react'
import {connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

const handleClick = () => {

}

export function ArticleDetails(props) {
    const { article } = props;
    if (article) {
        return(
            <div className="container section article-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                    <button className = "right btn red lighten-2 z-depth-0" onClick = { handleClick }>Favourite</button>
                        <span className="card-title">{ article.title }</span>
                        <div className="card-action grey-text">
                            <div>Authors: { article.authors }</div>
                            <div>Published: { article.date }</div>
                        </div>
                        <p>{ article.content}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return ( 
            <div className="container center">
                <p>Loading articles...</p>
            </div>
        )
    }
    function handleClick(e) {
        e.preventDefault();
        console.log('Article Saved');
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const article_id = ownProps.match.params.article_id;
    const articles = state.firestore.data.articles;
    const article = article ? articles[article_id] : null
    return {
        article:article
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'articles' }
    ])
)(ArticleDetails)