import React /*, { value, handleChange }*/ from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import { addQuiz } from '../../store/actions/quizActions'
import { compose } from 'redux';
import QuizQuestions from '../quiz/QuizQuestions'
import QuizSubmitted from './QuizSubmitted';


class Quiz extends React.Component {
    
    // Checks if the quiz was submitted within the last 2 weeks
    checkIfSubmitted(quizBitmaps) {

        
        if (quizBitmaps !== undefined && quizBitmaps.length > 0) {

            // Get most recent quiz date in seconds
            const quizDate = Math.max.apply(Math, quizBitmaps.map(quiz => quiz.date).map(time => time.seconds));
            // Get current date in seconds
            const currentDate = new Date().valueOf() / 1000;
            // Two weeks in seconds
            
            // TO DO: CHANGE THIS
            const twoWeeks = 60;

            //const twoWeeks = 1209600;
            
            console.log('current', currentDate);
            console.log('quiz date', quizDate);

            // Return true if the quiz has been submitted in the past 2 weeks
            return (currentDate < quizDate + twoWeeks); 
        } 
        // If no quiz results have been recorded to date, show quiz
        else {
            return false;
        }
    }


    render() {
        const { auth } = this.props;
        const { quizBitmaps } = this.props;
        const isSubmitted = this.checkIfSubmitted(quizBitmaps);

        if (!auth.uid) return <Redirect to = '/signin' />

        if(isSubmitted) {
            return(<QuizSubmitted></QuizSubmitted>);
        }
        else {
            return(<QuizQuestions></QuizQuestions>);
        }
    }
} 

const mapStateToProps = (state) => {
    return {
        quizBitmaps: state.firebase.profile.quizBitmaps,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(Quiz)