import React, { Component } from 'react';
import { base } from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
    };
  }

  componentWillMount() {
    this.usersListRef = base.syncState('usersList', {
      context: this,
      state: 'usersList',
      asArray: true,
    });
  }


  componentWillUnmount() {
    base.removeBinding(this.usersListRef);
  }

  render() {
    const usersList = this.state.usersList.map(user => (
      <div key={user.name}>
        <h3>{user.name}</h3>
        <ul style={{ listStyle: 'none' }}>
          <li>id: {user.id}</li>
          <li>age: {user.age}</li>
          <li>country: {user.country}</li>
        </ul>
      </div>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jobbatical.com Clone</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h3>Users in firebase:</h3>
        {usersList}
      </div>
    );
  }
}

export default App;
