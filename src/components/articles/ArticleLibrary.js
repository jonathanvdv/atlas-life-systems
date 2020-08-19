// This component should contain all available atlas articles
import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function ArticleLibrary(props, { articles }){
    // const { auth } = props;
    // if (!auth.uid) return <Redirect to = '/signin' />

    return ( 
        <div className="article-list section"> 
            {/* This section should connect to the atlas library server and show unfiltered articles */}
            { articles && articles.map(article => {
                return (
                    <Link
                        to={{
                            pathname: "/article/" + article.id,
                            state: { article: article }
                        }}>
                        <ArticleSummary article = { article } key = { article.id }/>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

// export default connect(mapStateToProps)(ArticleLibrary)
export default ArticleLibrary