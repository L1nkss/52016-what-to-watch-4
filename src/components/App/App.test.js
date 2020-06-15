import React from 'react';
import rendered from 'react-test-renderer';
import App from './App';

// Моки
const mocks = [
  `Joker`,
  `Knifes out`,
  `1917`
];


describe(`Should Render App Components`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = rendered
      .create(<App data={mocks} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
