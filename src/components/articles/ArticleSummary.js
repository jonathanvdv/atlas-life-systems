//This component determines what is displayed on article summary cards

import React from 'react'

export default function ArticleSummary({ article }) {
    return (
        <div className="article-list section"> 
            <div className="card z-depth-1 article-summary">
                <div className="card-content blue-text text-darken-3">
                    <span className="card-title">{ article.title }</span>
                    <p className="grey-text">Authors: { article.authors.map(function (author, index) {
                                return <span key={index}>{(index ? ", " : '') + author}</span> // adds commas to authors
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