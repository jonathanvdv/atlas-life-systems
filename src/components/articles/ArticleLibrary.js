// This component should contain all available atlas articles
import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

export default function ArticleLibrary({ articles }){

    return ( 
        <div className="article-list section"> 
            <Grid container spacing={3}>
                {/* This section should connect to the atlas library server and show unfiltered articles */}
                { articles && articles.map(article => {
                    return(
                        <Grid item xs={6} md={4}>
                            <Link
                                to={{
                                    pathname: "/article/" + article.id,
                                    state: { article: article }
                                }} >
                                <ArticleSummary article = { article } key = { article.id }/>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}