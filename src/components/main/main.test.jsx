import React from 'react';
import Main from './main';

// Моки
const films = [
  {
    name: `Bohemian Rhapsody`,
    image: `bohemian-rhapsody`
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `fantastic-beasts-the-crimes-of-grindelwald`
  },
  {
    name: `Macbeth`,
    image: `macbeth`
  },
  {
    name: `Aviator`,
    image: `aviator`
  },
  {
    name: `We need to talk about Kevin`,
    image: `we-need-to-talk-about-kevin`
  },
  {
    name: `What We Do in the Shadows`,
    image: `what-we-do-in-the-shadows`
  },
  {
    name: `Johnny English`,
    image: `johnny-english`
  },
  {
    name: `Shutter Island`,
    image: `shutter-island`
  },
];

const cb = () => {};


describe(`Testing Main component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer
      .create(<Main filmData={films} onCardClick={cb} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
