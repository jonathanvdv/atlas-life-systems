export const addQuiz = (quiz) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log(firebase.auth().currentUser.uid);

        firestore.collection('quizzes').add({
            ...quiz,
            userId: firebase.auth().currentUser.uid,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_QUIZ', quiz });
        }).catch((err) => {
            dispatch({ type: 'ADD_QUIZ_ERROR', err });
        })
    }
};