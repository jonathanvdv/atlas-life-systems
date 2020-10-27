import React /*, { value, handleChange }*/ from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import GAD7Questions from './GAD7Questions'
import GAD7Submitted from './GAD7Submitted';


class GAD7 extends React.Component {
    
    // Checks if the quiz was submitted within the last 2 weeks
    checkIfSubmitted(gad7Bitmaps) {

        if (gad7Bitmaps !== undefined && gad7Bitmaps.length > 0 && gad7Bitmaps[gad7Bitmaps.length - 1].date !== undefined) {

            // Get most recent quiz date in seconds
            const quizDate = Math.max.apply(Math, gad7Bitmaps.map(quiz => quiz.date).map(time => time.seconds));
            // Get current date in seconds
            const currentDate = new Date().valueOf() / 1000;
            // Two weeks in seconds
            
            // TO DO: CHANGE THIS
            const twoWeeks = 60;

            //const twoWeeks = 1209600;

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
        if (!auth.uid) return <Redirect to = '/signin' />

        const { gad7Bitmaps } = this.props;
        const isSubmitted = this.checkIfSubmitted(gad7Bitmaps);

        if(isSubmitted) {
            return(<GAD7Submitted></GAD7Submitted>);
        }
        else {
            return(<GAD7Questions></GAD7Questions>);
        }
    }
} 

const mapStateToProps = (state) => {
    return {
        gad7Bitmaps: state.firebase.profile.gad7Bitmaps,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(GAD7)