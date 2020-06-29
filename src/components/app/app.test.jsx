import React from 'react';
import {App} from './app';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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


describe(`Testing App component`, () => {
  it(`Component should successfully rendered`, () => {
    const store = mockStore({
      genre: `All genres`,
      allFilms: films,
      filteredFilms: films
    })
    const tree = renderer
      .create(<Provider store={store}><App /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
