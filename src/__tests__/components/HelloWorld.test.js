import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorld from '../../components/HelloWorld';

describe(HelloWorld, () => {
  // Add the rest of our tests here later!
  const name = 'Person';
  const component = shallow(<HelloWorld name={name} />);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<HelloWorld name="Person" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the supplied name', () => {
    expect(component.text()).toContain(name);
  });
});
