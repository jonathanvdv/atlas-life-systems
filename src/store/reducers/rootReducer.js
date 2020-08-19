import authReducer from './authReducer'
import favouriteReducer from './favouriteReducer'
import libraryReducer from './libraryReducer'
import quizReducer from './quizReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    library: libraryReducer,
    favourite: favouriteReducer,
    quiz: quizReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer