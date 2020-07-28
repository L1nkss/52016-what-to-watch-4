import * as React from "react";
import * as renderer from "react-test-renderer";
import App from './app';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import Api from "../../api";
import {mount} from "enzyme";
import * as ShallowRenderer from 'react-test-renderer/shallow';

const api = new Api(() => {}, () => {});
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);

// Моки
const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015,
    id: 1
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015,
    id: 2
  },
];


describe(`Testing App component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<App
      films={films}
      isDataLoading={false}
      isError={false}
      promoFilm={films[0]}
      loadFilms={() => {}}
      loadPromoFilm={() => {}}
      loadFavoritesFilms={() => {}}
      checkAuthStatus={() => {}}
    />);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
