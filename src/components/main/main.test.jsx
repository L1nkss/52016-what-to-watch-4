import React from 'react';
import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router";
import {createMemoryHistory} from "history";
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
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

describe(`Testing Main component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const cb = () => {};
    const store = mockStore({
      GENRE: {
        genre: `All genres`
      },
      DATA: {
        films,
        loading: false,
        error: false
      },
      PROMO: {
        film: films[0],
        loading: false,
        error: false
      },
      USER: {
        authorizationStatus: `NO_AUTH`
      }
    });
    const tree = renderer
      .create(<Provider store={store}>
        <Router history={history}>
          <Main
            loadFilms={cb}
            isError={false}
            isDataLoading={false}
            loadPromoFilm={cb}
            checkAuthStatus={cb}
            promoFilm={films[0]}
            films={films}
          />
        </Router>
      </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
