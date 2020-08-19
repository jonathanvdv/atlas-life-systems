// This library should only contain favourited articles
import React from 'react'
// import ArticleLibrary from './ArticleLibrary'
// import ArticleSummary from './ArticleSummary'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export function FavouriteLibrary() {
    // const { auth } = this.props;
    // if (!auth.uid) return <Redirect to = '/signin' />
    
    return ( 
        <div className="article-list section"> 
            {/* This section should connect to the atlas library server and show favourited articles */}
        </div>
 
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

// export default connect(mapStateToProps)(FavouriteLibrary)
export default FavouriteLibrary