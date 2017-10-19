const fb = require('firebase');

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
module.exports = {
  firebase,
};
