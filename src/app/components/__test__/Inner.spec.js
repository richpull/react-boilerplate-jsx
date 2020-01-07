import React from 'react';
import { shallow } from 'enzyme';
import Inner from '../Inner';
import renderer from 'react-test-renderer';

describe('>>>I N N E R --- Snapshot', () => {
  it('+++capturing Snapshot of Inner', () => {
    const renderedValue = renderer.create(<Inner title="Test title" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
