export const addQuiz = (quiz) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;

        const userRef = firestore.collection.users.doc(userId);

        userRef.update({
            quizBitmaps: firestore.FieldValue.arrayUnion(quiz, new Date())
        }).then(() => {
            dispatch({ type: 'ADD_QUIZ', quiz });
        }).catch((err) => {
            dispatch({ type: 'ADD_QUIZ_ERROR', err });
        })
    }
};