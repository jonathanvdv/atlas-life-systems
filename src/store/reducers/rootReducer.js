import authReducer from './authReducer'
import favoriteReducer from './favoriteReducer'
import libraryReducer from './libraryReducer'
import quizReducer from './quizReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    library: libraryReducer,
    favorite: favoriteReducer,
    quiz: quizReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer