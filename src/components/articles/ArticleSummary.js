//This component should condense detailed articles into easily previewed cards

// import React from 'react';
// import { addFavorite, removeFavorite } from '../../store/actions/articleActions';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

// export function ArticleSummary({ article }, props) {
//     // const  article   = props.location.state.article;
//     const { myLibrary } = props;
//     const articleIsInMyLibrary = (myLibrary !== undefined && myLibrary.filter((e) => e.id === article.id).length > 0) ? true : false;
//     console.log('myLibrary', myLibrary);
//     console.log('articleIsInMyLibrary', articleIsInMyLibrary);
    
//     var buttonText =  articleIsInMyLibrary ? "Saved" : "Favorite";
//     var buttonColor =  articleIsInMyLibrary ? "grey lighten-2" : "red lighten-2";
//     var buttonClassName = `bottom right btn ${buttonColor} z-depth-0`;

//     function handleClick(e) {
//         e.preventDefault();
//         // console.log('myLibrary', myLibrary);
//         // console.log('articleIsInMyLibrary', articleIsInMyLibrary);
//         return (articleIsInMyLibrary) ? props.removeFavorite(article) : props.addFavorite(article);
//     }

//     return (
//         <div className="project-list section"> 
//              <div className="card z-depth-0 article-summary">
//                  <div className="card-content blue-text text-darken-3">
//                      <span className="card-title">{ article.title }</span>
//                      <p className="grey-text">Authors: { article.authors.map((author) => author + " " )} </p>
//                      <p className="grey-text">Published: { article.date }</p>
//                      <p style={{color: "black"}}>{ article.summary.substring(0,300) } ... </p>
//                      <button className={ buttonClassName } onClick={ handleClick }>{ buttonText }</button>
//                  </div>
//              </div>
//          </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         myLibrary: state.firebase.profile.myLibrary,
//         auth: state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addFavorite: (article) => dispatch(addFavorite(article)),
//         removeFavorite: (article) => dispatch(removeFavorite(article))
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//         {collection: 'users'}
//     ])
// )(ArticleSummary)


import React from 'react'
// import ArticleDetails from './ArticleDetails'

export default function ArticleSummary({ article }) {
    return (
        <div className="article-list section"> 
            <div className="card z-depth-1 article-summary">
                <div className="card-content blue-text text-darken-3">
                    <span className="card-title">{ article.title }</span>
                    <p className="grey-text">Authors: { article.authors.map(function (author, index) {
                                return <span key={index}>{(index ? ", " : '') + author}</span>
                                }) 
                            }
                    </p>
                    <p className="grey-text">Published: { article.date }</p>
                    <p style={{color: "black"}}>{ article.summary.substring(0,300) } ... </p>
                </div>
            </div>
        </div>
    )
}