import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
