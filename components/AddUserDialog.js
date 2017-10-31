import React, { Component } from 'react';
import 'isomorphic-fetch';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class AddUserDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
    };
  }

  // Handle typing in the form with React (Updating state)
  handleChange = event => {
    this.setState({
      event,
      ...event,
    });
  };

  handleRequestClose = () => {
    this.props.onRequestClose();
  };

  render() {
    /*eslint-disable*/
    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Register new user</DialogTitle>
          <form action="/api/register" method="POST">
            <DialogContent>
              <DialogContentText>User Name</DialogContentText>

              <div>
                <input
                  type={'text'}
                  name="name"
                  onChange={e => this.handleChange({ name: e.target.value })}
                  value={this.state.name}
                />
              </div>

              <DialogContentText>Email</DialogContentText>
              <div>
                <input
                  type={'email'}
                  name="email"
                  onChange={e => this.handleChange({ email: e.target.value })}
                  value={this.state.email}
                />
              </div>

              <DialogContentText>Password</DialogContentText>
              <div>
                <input
                  type={'password'}
                  name="password"
                  onChange={e => this.handleChange({ password: e.target.value })}
                  value={this.state.password}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleRequestClose}>
                Close
              </Button>
              <Button color="accent" type="submit">
                SignUp
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AddUserDialog.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default AddUserDialog;
