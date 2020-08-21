export const addFavorite = (article) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // maker async call to database
        const firestore = getFirestore();
        const favorite = getState();

        firestore.collection('').add({
            ...article,
            userId: 42069,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_FAVORITE', article });
        }).catch((err) => {
            dispatch({ type: 'ADD_FAVORITE_ERROR', err });
        })
    }
};