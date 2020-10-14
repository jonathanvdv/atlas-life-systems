import React /*, { value, handleChange }*/ from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import PHQ9Questions from './PHQ9Questions'
import PHQ9Submitted from './PHQ9Submitted';


class PHQ9 extends React.Component {
    
    // Checks if the quiz was submitted within the last 2 weeks
    checkIfSubmitted(phq9Bitmaps) {

        if (phq9Bitmaps !== undefined && phq9Bitmaps.length > 0 && phq9Bitmaps[phq9Bitmaps.length - 1].date !== undefined) {

            // Get most recent quiz date in seconds
            const quizDate = Math.max.apply(Math, phq9Bitmaps.map(quiz => quiz.date).map(time => time.seconds));
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
        const { phq9Bitmaps } = this.props;
        const isSubmitted = this.checkIfSubmitted(phq9Bitmaps);

        if (!auth.uid) return <Redirect to = '/signin' />

        if(isSubmitted) {
            return(<PHQ9Submitted></PHQ9Submitted>);
        }
        else {
            return(<PHQ9Questions></PHQ9Questions>);
        }
    }
} 

const mapStateToProps = (state) => {
    return {
        phq9Bitmaps: state.firebase.profile.phq9Bitmaps,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(PHQ9)