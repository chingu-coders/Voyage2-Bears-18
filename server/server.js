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
const createEmail = require('./methods/createUserEmail');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(secret),
  databaseURL: 'https://voyage2-bears18.firebaseio.com/',
}, 'server');


app.prepare()
  .then(() => {
    const server = express();

    // Functions to populate req.body
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // Session configuration
    server.use(session({
      secret: 'the message',
      saveUninitialized: true,
      store: new FileStore({ path: '/tmp/sessions', secret: 'the message' }),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 },
    }));

    // Implmenting firebase in Next.js
    server.use((req, res, next) => {
      req.firebaseServer = firebase;
      next();
    });

    // POST Request for 'Sign Up' (Name/Email/Password)
    server.post('/api/register', (req, res) => {
      if (!req.body) return res.sendStatus(400);

      createEmail(req.body, res);
      // res.sendStatus(200);
    });

    // ## ROUTING
    // server.get('PATH', (req, res) => app.render(req, res, 'FILENAME', req.query))
    server.get('/', (req, res) => app.render(req, res, '/index', req.query));

    // Renders pages according to filename
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
