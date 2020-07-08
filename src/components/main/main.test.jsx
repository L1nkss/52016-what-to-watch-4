import React from 'react';
import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
// Моки
const films = [
  {
    name: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`
  },
];

const cb = () => {};


describe(`Testing Main component`, () => {
  it(`Component should successfully rendered`, () => {
    const store = mockStore({
      GENRE: {
        genre: `All genres`
      },
      DATA: {
        films
      },
      PROMO: {
        film: {}
      }
    });
    const tree = renderer
      .create(<Provider store={store}><Main changePath={cb}/></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
