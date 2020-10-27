import authReducer from './authReducer';
import favoriteReducer from './favoriteReducer';
import quizReducer from './quizReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({ // composes/combines reducers
    auth: authReducer,
    favorite: favoriteReducer,
    quiz: quizReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer