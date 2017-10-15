const express = require('express');
const next = require('next');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

// will be changed later to fit production needs, set to 3000 for now
const port = 3000;
const dev = 'development';
const app = next({ dev });
const handle = app.getRequestHandler();

const secret = require('./credentials/server');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(secret),
  databaseURL: 'https://voyage2-bears18.firebaseio.com/',
}, 'server');

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(session({
      secret: 'the message',
      saveUninitialized: true,
      store: new FileStore({ path: '/tmp/sessions', secret: 'the message' }),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 },
    }));

    server.use((req, res, next) => {
      req.firebaseServer = firebase;
      next();
    });

    server.post('/api/register', (req, res) => {
      if (!req.body) return res.sendStatus(400);

      const token = req.body.token;
      firebase.auth().createUser({
        email: 'user@example.com',
        emailVerified: false,
        phoneNumber: '+11234567890',
        password: 'secretPassword',
        displayName: 'John Doe',
        photoURL: 'http://www.example.com/12345678/photo.png',
        disabled: false,
      }).then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
      }).catch((error) => {
        console.log('Error creating new user:', error);
      });
    });

    server.get('/', (req, res) => app.render(req, res, '/index', req.query));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
