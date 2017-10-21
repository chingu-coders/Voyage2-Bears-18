const admin = require('firebase-admin');
const secret = require('./../credentials/server');

admin.initializeApp({
  credential: admin.credential.cert(secret),
  databaseURL: 'https://voyage2-bears18.firebaseio.com/',
});

module.exports = (user, res) => {
  admin.auth().createUser({
    email: user.email,
    password: user.password,
    displayName: user.name,
  })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
      res.sendStatus(400);
    });
};

