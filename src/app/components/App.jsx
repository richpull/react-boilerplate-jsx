import React, { Component } from 'react';
import Inner from './Inner.jsx';
import testObjectStyle from './testObjectStyle';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Hello. I am Wrapper</h1>
        <div>
          My css-{'>'} <span style={testObjectStyle.badgeInline}>main.scss</span>
        </div>
        <Inner title="I am Inner Component" />
        <img src="img/react-image.png" alt="" />
      </div>
    );
  }
}

export default App;
