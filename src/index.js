import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDPYe5gUQYWo6oupbpBHFLElaCrYNcprzg",
    authDomain: "voyage2-bears18.firebaseapp.com",
    databaseURL: "https://voyage2-bears18.firebaseio.com",
    projectId: "voyage2-bears18",
    storageBucket: "voyage2-bears18.appspot.com",
    messagingSenderId: "290913994215"
  }
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
