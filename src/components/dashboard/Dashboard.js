// This component is currently the homepage of the application
import React, { Component } from 'react';
import ArticleLibrary from '../articles/ArticleLibrary';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { dot } from 'mathjs';

class Dashboard extends Component { 

    quizExists = (phq9Bitmaps) => {
        if ((phq9Bitmaps !== undefined || !phq9Bitmaps) || phq9Bitmaps.length  < 1) {
            return false
        } else {
            return true
        }
    }

    render () { 
        const { auth } = this.props;
        const { phq9Bitmaps } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;
        if (this.quizExists(phq9Bitmaps)) return <Redirect to = '/quiz' />

        const filteredLibrarySize = 10;
        const { articles } = this.props;
        
        // these arrays appear to be objects with properties as opposed to arrays
        // cant use array methods, need to use object methods
        var mostRecentQuiz = [];
        var orderedMostRecentQuiz = [];
        var mostRecentQuizBitmap = [];
        if (phq9Bitmaps !== undefined && phq9Bitmaps.length > 0) {
            mostRecentQuiz = phq9Bitmaps[phq9Bitmaps.length - 1];
            delete mostRecentQuiz.date;
            Object.keys(mostRecentQuiz).sort().forEach((key) => {
                orderedMostRecentQuiz[key] = mostRecentQuiz[key];
              });
            mostRecentQuizBitmap = Object.values(orderedMostRecentQuiz);
        } else {
            mostRecentQuiz = [];
            mostRecentQuizBitmap = [];
        }

        var articleRank;
        var rankedArticles = [];
        var sortedArticles = [];
        if (articles !== undefined && articles.length > 0 && mostRecentQuizBitmap.length > 0) {
                rankedArticles = articles.map(article => {
                    if (mostRecentQuizBitmap.length === article.bitmap.length) {
                        articleRank = dot(mostRecentQuizBitmap, article.bitmap);
                        let rankedArticle = Object.assign({}, {article: article}, {articleRank: articleRank});
                        return {
                            rankedArticle
                        }
                    } else {
                        return article;
                    }
            })
            
            if (rankedArticles.length > 0){
                sortedArticles = rankedArticles
                .sort((b, a) => a.rankedArticle.articleRank - b.rankedArticle.articleRank)
                .slice(0, filteredLibrarySize - 1);
            }
        }
        if (sortedArticles.length > 0) {
            sortedArticles = sortedArticles.map(article => {
                return article.rankedArticle.article
            })
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <ArticleLibrary articles = { sortedArticles }/>
                </div>
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return { 
        articles: state.firestore.ordered.articles,
        phq9Bitmaps: state.firebase.profile.phq9Bitmaps,
        auth: state.firebase.auth
     }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'},
        {collection: 'users'}
    ])
)(Dashboard)