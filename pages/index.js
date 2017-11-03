/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import App from '../components/App';
import AddUserDialog from '../components/AddUserDialog';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Index extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography type="display1" gutterBottom>
          Jobbatical Clon
        </Typography>
        <Typography type="subheading" gutterBottom>
          Create an account
        </Typography>
        <AddUserDialog open={this.state.open} onRequestClose={this.handleRequestClose} />
        <Button raised color="accent" onClick={this.handleClick}>
          SignUp
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));

{
  /* <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
<DialogTitle>Super Secret Password</DialogTitle>
<DialogContent>
  <DialogContentText>1-2-3-4-5</DialogContentText>
</DialogContent>
<DialogActions>
  <Button color="primary" onClick={this.handleRequestClose}>
    OK
  </Button>
</DialogActions>
</Dialog> */
}
