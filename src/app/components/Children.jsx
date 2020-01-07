import React, { Component } from 'react';

import '../../styles/scss/Children.scss';
import '../../styles/css/test.css';

class Children extends Component {
  render() {
    return (
      <div className="children">
        <h1>I am Children Component</h1>
        <p>My css-{'>'} styled component</p>
        <div className="test">test.css</div>
      </div>
    );
  }
}
export default Children;
