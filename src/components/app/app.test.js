import React from 'react';
import App from './app';

// Моки
const mocks = [
  `Joker`,
  `Knifes out`,
  `1917`
];


describe(`Should Render App Components`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer
      .create(<App data={mocks} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
