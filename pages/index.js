import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
// import './../static/index.css';
import App from './../src/components/App';
// import createEmail from './../server/methods/createUserEmail';

export default () => (
  <div>
    <App />
    {/* <button onClick='createEmail()'>Gox</button> */}
  </div>
);
