export const addQuiz = (quiz) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;

        const userRef = firestore.collection('users').doc(userId);

        userRef.update({
            phq9Bitmaps: firestore.FieldValue.arrayUnion(quiz)
        }).then(() => {
            dispatch({ type: 'ADD_QUIZ', quiz });
        }).catch((err) => {
            dispatch({ type: 'ADD_QUIZ_ERROR', err });
        })
    }
};