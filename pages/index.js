// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom/server';
// // import './../static/index.css';
// import App from './../src/components/App';
import React, { Component } from 'react';
import 'isomorphic-fetch';
import firebase from '../server/credentials/client';

export default class Index extends Component {
  // static async getInitialProps({ req, query }) {
  //   const user = req && req.session ? req.session.decodedToken : null;
  //   const snap = user && await req.firebaseServer.database().ref('messages').once('value');
  //   const messages = snap && snap.val();
  //   return { user, messages };
  // }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
    };

    // this.addDbListener = this.addDbListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit(this);
  }

  // componentWillMount() {
  //   firebaseInit();
  // }

  componentDidMount() {
    // this.addDbListener();

    // const messagesRef = firebase.database().ref('messages').orderByKey().limitToLast(100);
    // messagesRef.on('child_added', (snapshot) => {
    //   /* Update React state when message is added at Firebase Database */
    //   const message = { text: snapshot.val(), id: snapshot.key };
    //   this.setState({ messages: [message].concat(this.state.messages) });
    // });
  }

  // addDbListener() {
  //   firebase.database().ref('messages').on('value', (snap) => {
  //     const messages = snap.val();
  //     if (messages) this.setState({ messages });
  //   });
  // }

  handleChange(event) {
    this.setState({
      event,
      ...event,
    });
  }

  // handleSubmit() {
  //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .catch((error) => {
  //     });
  // }


  render() {
    /*eslint-disable*/
    return (
      <div>
        <form action='/api/register' method='POST'>
          <div>
            <input
              type={'text'}
              name='name'
              onChange={e => this.handleChange({ name: e.target.value })}
              value={this.state.name}
            />
          </div>

          <div>
            <input type={'email'}
              name='email'
              onChange={e => this.handleChange({ email: e.target.value })}
              value={this.state.email}
            />
          </div>

          <div>
            <input type={'password'}
              name='password'
              onChange={e => this.handleChange({ password: e.target.value })}
              value={this.state.password}
            />
          </div>

          <div>
            <button type='submit'>SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

