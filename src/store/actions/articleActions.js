export const addFavorite = (articleId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        // const userProfile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid; 

        const userRef = firestore.collection('users').doc(userId);

        userRef.update({
            myLibrary: firestore.FieldValue.arrayUnion(articleId)
        }).then(() => {
            dispatch({ type: 'ADD_FAVORITE', articleId });
        }).catch((err) => {
            dispatch({ type: 'ADD_FAVORITE_ERROR', err });
        })
    }
};

export const removeFavorite = (articleId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        // const userProfile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid; 

        const userRef = firestore.collection('users').doc(userId);

        userRef.update({
            myLibrary: firestore.FieldValue.arrayRemove(articleId)
        }).then(() => {
            dispatch({ type: 'REMOVE_FAVORITE', articleId });
        }).catch((err) => {
            dispatch({ type: 'REMOVE_FAVORITE_ERROR', err });
        })
    }
};