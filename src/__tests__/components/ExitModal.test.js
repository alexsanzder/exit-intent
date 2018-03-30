import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ExitModal from '../../components/ExitModal';

describe(ExitModal, () => {
  // Add the rest of our tests here later!
  const name = 'Person';
  const component = shallow(<ExitModal name={name} />);

  it('renders and matches our snapshot', () => {
    const component = renderer.create(<ExitModal name="Person" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains the supplied name', () => {
    expect(component.text()).toContain(name);
  });
});
