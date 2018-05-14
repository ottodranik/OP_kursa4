import React from 'react';
import Card from './Card.jsx';
import { shallow, mount, render } from 'enzyme';

describe('Card', () => {
  const defaultProps = {};
  const defaultActions = {
    onClick: jest.fn()
  };

  function setup(propsOverrides, actionOverrides, type = 'shallow') {
    const props = { ...defaultProps, ...propsOverrides };
    const actions = { ...defaultActions, ...actionOverrides };
    let wrapper;
    switch (type) {
      case 'shallow': wrapper = shallow(<Card {...props} {...actions} />); break;
      case 'mount': wrapper = mount(<Card {...props} {...actions} />); break;
      case 'render': wrapper = render(<Card {...props} {...actions} />); break;
      default: wrapper = shallow(<Card {...props} {...actions} />);
    }
    return { props, wrapper, actions };
  }

  it('should contain Card component with right properties', () => {
    const props = {
      card: {
        name: 'lalala',
      }
    };
    const { wrapper } = setup(props);
    console.log(wrapper.find('span').nodes[1].props)
    expect(wrapper.find('span').nodes[1].props.children).toEqual(props.card.name);
  })

  it('should call onClick callback after click on card', () => {
    const props = {
      card: {
        name: 'lalala',
      }
    };
    const { wrapper, actions } = setup(props);
    wrapper.find('div').simulate('click');
    expect(actions.onClick).toHaveBeenCalled();
  })

})
