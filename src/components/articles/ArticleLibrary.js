// This component formats relevant articles into a grid 

import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link/*, Redirect*/ } from 'react-router-dom'
// import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

export default function ArticleLibrary({ articles }){
    if (articles && articles.length > 0) { // if articles exists and theres at least 1 article    
        return ( 
            <div className="article-list section"> 
                <Grid container spacing={3}>
                    {/* This section should connect to the atlas library server and show unfiltered articles */}
                    { articles.map(article => { // map the articles into a grid
                        return(
                            <Grid item xs={6} md={4} key={article.id}> 
                                <Link // tells the grid what information to use and which url to redirect
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
                <h5>There are no articles in your Dashboard</h5>
                <h6>You can add articles by taking a quiz</h6>
            </div>
        )
    }
}