import authReducer from './authReducer'
import favouriteReducer from './favouriteReducer'
import libraryReducer from './libraryReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    library: libraryReducer,
    favourite: favouriteReducer,
    firestore: firestoreReducer
})

export default rootReducer