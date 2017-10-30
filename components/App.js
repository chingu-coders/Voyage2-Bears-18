import React from 'react';
import List from './List';
import AddItem from './AddItem';
import base from './rebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.ref = base.syncState('todoList', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({ loading: false });
      },
    });
  }
  handleAddItem = newItem => {
    this.setState({
      list: this.state.list.concat([newItem]),
    });
  };
  handleRemoveItem = index => {
    const newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
  render() {
    return (
      <div>
        <h3> re-base Todo List </h3>
        <AddItem add={this.handleAddItem} />
        {this.state.loading === true ? (
          <h3> LOADING... </h3>
        ) : (
          <List items={this.state.list} remove={this.handleRemoveItem} />
        )}
      </div>
    );
  }
}

export default App;
