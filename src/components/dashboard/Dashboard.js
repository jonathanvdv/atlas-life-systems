// This component is currently the homepage of the application
import React, { Component } from 'react';
import ArticleLibrary from '../articles/ArticleLibrary';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { dot } from 'mathjs';

class Dashboard extends Component { 

    quizExists = (quizBitmaps) => {
        if ((quizBitmaps !== undefined || !quizBitmaps) || quizBitmaps.length  < 1) {
            return false
        } else {
            return true
        }
    }
    
    getMostRecentQuizBitmap = (quizBitmaps) => {
        var mostRecentQuiz = [];
        var orderedMostRecentQuiz = [];

        if (quizBitmaps !== undefined && quizBitmaps.length > 0) {
            mostRecentQuiz = quizBitmaps[quizBitmaps.length - 1];
            delete mostRecentQuiz.date;
            delete mostRecentQuiz.quizName;
            Object.keys(mostRecentQuiz).sort().forEach((key) => {
                orderedMostRecentQuiz[key] = mostRecentQuiz[key];
              });
            return Object.values(orderedMostRecentQuiz);
        } else {
            mostRecentQuiz = [];
            return [];
        }
    }

    sortArticles = (articles, mostRecentQuizBitmap, filteredLibrarySize) => {
        
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
        return sortedArticles;
    }

    render () { 
        const { auth } = this.props;
        const { phq9Bitmaps } = this.props;
        const { gad7Bitmaps } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />;
        if (this.quizExists(phq9Bitmaps)) return <Redirect to = '/phq9' />;
        if (this.quizExists(gad7Bitmaps)) return <Redirect to = '/gad7' />;

        const filteredLibrarySize = 10;
        const { articles } = this.props;
        
        // these arrays appear to be objects with properties as opposed to arrays
        // cant use array methods, need to use object methods

        var mostRecentPHQ9Bitmap = this.getMostRecentQuizBitmap(phq9Bitmaps);
        // var mostRecentGAD7Bitmap = this.getMostRecentQuizBitmap(gad7Bitmaps);

        // var allSortedArticles = 
        var phq9SortedArticles = this.sortArticles(articles, mostRecentPHQ9Bitmap, filteredLibrarySize);
        var gad7SortedArticles = this.sortArticles(articles, mostRecentGAD7Bitmap, filteredLibrarySize);

        // Create dropdown
        var filteredSelection;
        <DropdownButton id="filterButton" title="Filter By">
            {/* <Dropdown.Item href={allSortedArticles}>All Quizzes</Dropdown.Item> */}
            <Dropdown.Item href={phq9SortedArticles} onClick={filteredSelection=phq9SortedArticles}>PHQ-9</Dropdown.Item>
            <Dropdown.Item href={gad7SortedArticles} onClick={filteredSelection=gad7SortedArticles}>GAD-7</Dropdown.Item>
        </DropdownButton>

        return (
            <div className="dashboard container">
                <div className="row">
                    <ArticleLibrary articles = { filteredSelection }/>
                </div>
            </div>
        )
     }
}

const mapStateToProps = (state) => {
    return { 
        articles: state.firestore.ordered.articles,
        phq9Bitmaps: state.firebase.profile.phq9Bitmaps,
        gad7Bitmaps: state.firebase.profile.gad7Bitmaps,
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