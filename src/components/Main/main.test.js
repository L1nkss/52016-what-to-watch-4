import React from 'react';
import rendered from 'react-test-renderer';
import Main from './main';

// Моки
const mocks = [
  `Joker`,
  `Knifes out`,
  `1917`
];

const cb = () => {};


describe(`Should Render Main Components`, () => {
  it(`<Main /> Should render Component`, () => {
    const tree = rendered
      .create(<Main filmData={mocks} onCardClick={cb} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
