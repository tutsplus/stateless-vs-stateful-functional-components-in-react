import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;
