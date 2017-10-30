import React, { Component } from 'react';
import 'isomorphic-fetch';

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Handle typing in the form with React (Updating state)
  handleChange(event) {
    this.setState({
      event,
      ...event,
    });
  }

  render() {
    /*eslint-disable*/
    return (
      <div>
        <form action="/api/register" method="POST">
          <div>
            <input
              type={'text'}
              name="name"
              onChange={e => this.handleChange({ name: e.target.value })}
              value={this.state.name}
            />
          </div>

          <div>
            <input
              type={'email'}
              name="email"
              onChange={e => this.handleChange({ email: e.target.value })}
              value={this.state.email}
            />
          </div>

          <div>
            <input
              type={'password'}
              name="password"
              onChange={e => this.handleChange({ password: e.target.value })}
              value={this.state.password}
            />
          </div>

          <div>
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}
