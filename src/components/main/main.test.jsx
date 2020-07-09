import React from 'react';
import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
// Моки
const films = [
  {
    name: `Bohemian Rhapsody`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015
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
        films,
        loading: false
      },
      PROMO: {
        film: films[0],
        loading: false
      }
    });
    const tree = renderer
      .create(<Provider store={store}><Main changePath={cb}/></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
