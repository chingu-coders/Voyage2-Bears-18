import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: '',
        name: '',
        age: '',
        country: '',
      }
    }
  }

  componentDidMount() {
    const usersListRef = firebase.database().ref().child('usersList')
    const userRef = usersListRef.child('user')
    userRef.on('value', snap => {
      console.log(snap.val())
      this.setState({
        user: snap.val(),
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jobbatical.com Clone</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Our components should go to 'components' folder.
        </p>
        <p>
          Each component should have separate css file with identical name in the same folder (ex. NewComponent.js have NewComponent.css).
          App.js is a body of our clone, here we import and use (render) new components.
        </p>

        <h2>test user from firebase:</h2>
          <p>id: {this.state.user.id}</p>
          <p>Name: {this.state.user.name}</p>
          <p>Age: {this.state.user.age}</p>
          <p>Country: {this.state.user.country}</p>
      </div>
    );
  }
}

export default App;
