// This component should contain all available atlas articles
import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link } from 'react-router-dom'

export default function ArticleLibrary({articles}) {
    return ( 
        <div className="article-list section"> 
            {/* This section should connect to the atlas library server and show unfiltered articles */}
            { articles && articles.map(article => {
                return(
                    <Link>
                        to={{
                            pathname: "/article/" + article.id,
                            state: { article: article }
                        }}
                        <ArticleSummary article = { article } key = { article.id }/>
                    </Link>
                )
            })}
        </div>
 
    )
}
