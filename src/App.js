import React, { Component } from 'react';
import Welcome from './Welcome';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    }
  }

  render() {
    return (
      <div>
        {this.state.names.map((name, index) =>
          <Welcome key={index} name={name} />
        )}
      </div>
    );
  }
}


export default App;
