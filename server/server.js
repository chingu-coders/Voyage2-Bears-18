// const  createEmail = require('./credentials/client');

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

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
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

      // const token = req.body.token;
      console.log(req);
      createEmail(req.body);
    });

    server.get('/', (req, res) => app.render(req, res, '/index', req.query));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
