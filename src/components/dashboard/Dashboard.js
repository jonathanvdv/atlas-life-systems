// This component is currently the homepage of the application
import React, { Component } from 'react'
import ArticleLibrary from '../articles/ArticleLibrary'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component { 
    render () { 
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;

        const filteredLibrarySize = 10;
        const { quizBitmaps } = this.props;
        const { articles } = this.props;
        console.log("quizbitmaps",quizBitmaps);
        console.log("articles",articles);
        
        // these arrays appear to be objects with properties as opposed to arrays
        // cant use array methods, need to use object methods
        var mostRecentQuiz = [];
        var mostRecentQuizBitmap = [];
        if (quizBitmaps !== undefined && quizBitmaps.length > 0) {
            mostRecentQuiz = quizBitmaps[quizBitmaps.length - 1];
            delete mostRecentQuiz.date;
            mostRecentQuizBitmap = mostRecentQuizBitmap.map(bit => {
                return Number(bit)
            })
            console.log("mostrecentquiz",mostRecentQuiz);
            console.log("mostrecentquizbitmap",mostRecentQuizBitmap);
        } else {
            mostRecentQuiz = [];
            mostRecentQuizBitmap = [];
        }
        console.log("mostrecentquiz",mostRecentQuiz);
        console.log("mostrecentquizbitmap", mostRecentQuizBitmap);

        var articleRank;

        var rankedArticles = [];
        var sortedArticles = [];
        if (articles !== undefined && articles.length > 0) {
                articles.map(article => {
                    if (mostRecentQuizBitmap.length === article.bitmap.length) {
                        articleRank = mostRecentQuizBitmap.map(quizBitmap => {
                            return quizBitmap * article.bitmap
                        })
                        return {
                            ...article,
                            articleRank: articleRank
                        }
                    } else {
                        return article
                    }
            })
            sortedArticles = rankedArticles
            .sort((a, b) => a.articleRank - b.articleRank)
            .slice(0, filteredLibrarySize - 1);
        } else {
                rankedArticles = [];
                sortedArticles = [];
        }
        console.log("rankedarticles",rankedArticles)

        console.log("sortedarticles",sortedArticles)

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
    console.log(state); 
    return { 
        articles: state.firestore.ordered.articles,
        quizBitmaps: state.firebase.profile.quizBitmaps,
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