import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import clienCredentials from '../credentials/client';

const app = !firebase.apps.length ? firebase.initializeApp(clienCredentials) : firebase.app();

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
