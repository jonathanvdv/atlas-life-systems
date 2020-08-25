export const addFavorite = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        // const userProfile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid; 

        const userRef = firestore.collection('users').doc(userId);

        userRef.update({
            myLibrary: firestore.FieldValue.arrayUnion(article)
        }).then(() => {
            dispatch({ type: 'ADD_FAVORITE', article });
        }).catch((err) => {
            dispatch({ type: 'ADD_FAVORITE_ERROR', err });
        })
    }
};

export const removeFavorite = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        // const userProfile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid; 

        const userRef = firestore.collection('users').doc(userId);

        userRef.update({
            myLibrary: firestore.FieldValue.arrayRemove(article)
        }).then(() => {
            dispatch({ type: 'REMOVE_FAVORITE', article });
        }).catch((err) => {
            dispatch({ type: 'REMOVE_FAVORITE_ERROR', err });
        })
    }
};