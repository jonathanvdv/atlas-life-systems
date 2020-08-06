// This component should request detailed article information
import React from 'react'

export default function ArticleDetails(props) {
    const article = props.location.state.article;
    console.log(article);
    const article_id = props.match.params.article_id;
    
    function handleClick(e) {
        e.preventDefault();
        console.log('Article Saved');
    }
    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <button className = "right btn red lighten-2 z-depth-0" onClick = { handleClick }>Favourite</button>
                    <span className="card-title">Article Title</span>
                    <div className="card-action grey-text">
                        <div>Authors: {article.authors} </div>
                        <div>Published:</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos deleniti suscipit provident veniam aut recusandae hic amet aliquid quis, error ipsa numquam ipsam tempora laborum ut voluptatem molestiae quos.</p>
                </div>
            </div>
        </div>
    )
}
