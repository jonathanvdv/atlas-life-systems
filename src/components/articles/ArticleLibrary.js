// This component should contain all available atlas articles
import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link/*, Redirect*/ } from 'react-router-dom'
// import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

export default function ArticleLibrary({ articles }){
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to = '/signin' />
    console.log("articles:",articles);
    if (articles && articles.length > 0) {    
        return ( 
            <div className="article-list section"> 
                <Grid container spacing={3}>
                    {/* This section should connect to the atlas library server and show unfiltered articles */}
                    { articles.map(article => {
                        return(
                            <Grid item xs={6} md={4} key={article.id}>
                                <Link
                                    to={{
                                        pathname: "/article/" + article.id,
                                        state: { article: article }
                                    }} key={article.id}>
                                    <ArticleSummary article = { article } key = { article.id }/>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    } else {
        return(
            <div>
                <h5>There are no articles in this Library</h5>
                <h6>You can add articles from the homepage or the Atlas library</h6>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth
//     }
// }

// export default connect(mapStateToProps)(ArticleLibrary)