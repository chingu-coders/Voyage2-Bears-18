const fb = require('firebase');

const config = {
  apiKey: 'AIzaSyDPYe5gUQYWo6oupbpBHFLElaCrYNcprzg',
  authDomain: 'voyage2-bears18.firebaseapp.com',
  databaseURL: 'https://voyage2-bears18.firebaseio.com',
  projectId: 'voyage2-bears18',
  storageBucket: 'voyage2-bears18.appspot.com',
  messagingSenderId: '290913994215',
};

const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
module.exports = {
  firebase,
};
