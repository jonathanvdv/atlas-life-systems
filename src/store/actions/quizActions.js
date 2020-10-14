export const addQuiz = (quiz) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;

        const userRef = firestore.collection('users').doc(userId);

        if (quiz.quizName === 'PHQ-9') {
            userRef.update({
                phq9Bitmaps: firestore.FieldValue.arrayUnion(quiz)
            }).then(() => {
                dispatch({ type: 'ADD_PHQ9', quiz });
            }).catch((err) => {
                dispatch({ type: 'ADD_PHQ9_ERROR', err });
            })
        } else if (quiz.quizName === 'GAD-7') {
            userRef.update({
                gad7Bitmaps: firestore.FieldValue.arrayUnion(quiz)
            }).then(() => {
                dispatch({ type: 'ADD_GAD7', quiz });
            }).catch((err) => {
                dispatch({ type: 'ADD_GAD7_ERROR', err });
            })
        }
    }
};