import React from 'react';
import rendered from 'react-test-renderer';
import Main from './Main';

// Моки
const mocks = [
  `Joker`,
  `Knifes out`,
  `1917`
];


describe(`Should Render Main Components`, () => {
  it(`<Main /> Should render Component`, () => {
    const tree = rendered
      .create(<Main filmData={mocks} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
