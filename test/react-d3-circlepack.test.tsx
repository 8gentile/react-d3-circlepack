import * as React from 'react';
import ReactD3CirclePack from '../src/pack/react-d3-circlepack'
const { shallow } = require('enzyme');

/**
 * Dummy test
 */
describe('Dummy test', () => {
  let data;
  beforeEach(() => {
    data = {
      key: 'Hello Orbital Sphere'
    }
  })

  it('renders a circle for a single node', () => {
    const wrapper = shallow(<ReactD3CirclePack data={data} />);
    console.log(wrapper.debug());
    expect(wrapper.find('svg').exists());
  })
})
