import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../image';

describe('Image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
