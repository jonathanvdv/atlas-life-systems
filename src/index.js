// As of react v6 had to change firebase and firestore imports

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './config/fbConfig'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore'
import fbConfig from './config/fbConfig'
import rrfConfig from './config/rrfConfig'
import { connect } from 'react-redux'
import logo from './images/logo.png'

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig) 
  )
);

const mapStateToProps = (state) => ({
  authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
});

const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
  if(!authIsLoaded) return (
    // <div>Loading...</div>,
    <div styles={{ backgroundImage:`url(${logo})` }}>
      Loading...
    </div>
  );
  return (
    // Components requiring authorization
    <App />
  );
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <ReactReduxFirebaseProvider { ...rrfProps }>
        <WaitTillAuth />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();