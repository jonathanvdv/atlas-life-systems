export const addQuiz = (quiz) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();

        firestore.collection('quizzes').add({
            ...quiz,
            userId: 42069
            
        }).then(() => {
            dispatch({ type: 'ADD_QUIZ', quiz });
        }).catch((err) => {
            dispatch({ type: 'ADD_QUIZ_ERROR', err });
        })
    }
};