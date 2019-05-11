import * as React from 'react';
import Circle from '../src/pack/circle';
import { shallow } from 'enzyme';

describe('Dummy test', () => {
  let node;
  beforeEach(() => {
    return node = {
      cx: 50,
      cy: 50,
      r: 50,
      children: []
    };
  })

  it('renders a circle for a node without depth', () => {
    const wrapper = shallow(<Circle node={node} />);
    console.log(wrapper.debug());
    expect(wrapper.find('circle').exists());
  })

  it('applies colors for different depths', () => {
    node.depth = 0;
    const wrapper = shallow(<Circle node={node} />);
    expect(wrapper.find('circle').prop("fill") === "blue");
    node.depth = 1;
    const wrapper2 = shallow(<Circle node={node} />);
    console.log(wrapper2.debug());
    expect(wrapper.find('circle').prop("fill") === "green");
  })
})
