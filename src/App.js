import React, { Component } from 'react';
import MyProvider from './context/MyProvider';
import Extra from './components/Extra';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>Some text at App.js</p>
          <Extra />
        </div>
      </MyProvider>
    );
  }
}


export default App;