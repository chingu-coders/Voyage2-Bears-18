import React, { Component } from 'react';
import { base } from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jobbatical.com Clone</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
