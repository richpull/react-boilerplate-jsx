import React, { Component } from 'react';
import Children from './Children';
import styled from 'styled-components';

const InnerContainer = styled.section`
  border: 1px solid #ccc;
  margin: 50px;
  padding: 50px;
`;

class Inner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <InnerContainer>
        <h1>{this.props.title}</h1>
        <div>My css-{'>'} children.css</div>
        <Children />
      </InnerContainer>
    );
  }
}
export default Inner;
