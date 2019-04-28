import * as React from 'react';
import ReactD3CirclePack from '../src/pack/react-d3-circlepack'
const { shallow } = require('enzyme');

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('ReactD3CirclePack is instantiable', () => {

    expect(new ReactD3CirclePack({ name: 'jeff' })).toBeInstanceOf(ReactD3CirclePack)
  })

  it('renders', () => {
    const wrapper = shallow(<ReactD3CirclePack name="barbie" />);
    console.log(wrapper.debug());
    expect(wrapper.find('svg').exists());
  })
})