//This component should condense detailed articles into easily previewed cards
import React from 'react'

export default function ArticleSummary({ article }) {
    return (
        <div className="project-list section"> 
            <div className="card z-depth-0 article-summary">
                <div className="card-content blue-text text-darken-3">
                    <span className="card-title">{ article.title }</span>
                    <p className="grey-text">Authors: { article.authors.map((author) => author + " " )} </p>
                    <p style={{color: "black"}}>{ article.content.substring(0,300) } ... </p>
                </div>
            </div>
        </div>
    )
}