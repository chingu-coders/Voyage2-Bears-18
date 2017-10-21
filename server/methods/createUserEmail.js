const admin = require('firebase-admin');
const secret = require('./../credentials/server');

admin.initializeApp({
  credential: admin.credential.cert(secret),
  databaseURL: 'https://voyage2-bears18.firebaseio.com/',
});
module.exports = (user) => {
  admin.auth().createUser({
    email: user.email,
    password: user.password,
    displayName: user.name,
  })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
    });
};

