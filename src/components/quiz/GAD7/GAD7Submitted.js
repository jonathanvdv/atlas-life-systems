import React /*, { value, handleChange }*/ from 'react'

export function GAD7Submitted() {
    return (
        <div className="dashboard container">
            <div className="article-list section"> 
                <div className="container section article-details">
                    <div className="card z-depth-0 article-summary">
                        <div className="card-content blue-text text-darken-3">
                            <span className="card-title">Quiz Submitted!</span>
                            <p className="grey-text">Thanks for taking the Generalized Anxiety Disorder Questionnaire! The questionnaire will be available 2 weeks after your last quiz submission.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GAD7Submitted