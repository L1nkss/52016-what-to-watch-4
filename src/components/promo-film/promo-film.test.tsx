import * as React from "react";
import * as renderer from "react-test-renderer";
import PromoFilm from "@components/promo-film/promo-film";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const mockStore = configureStore([]);
const film = {
  backgroundImage: `https://image.com`,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  id: 2,
  genre: `Crime`,
  released: 2015,
  isFavorite: true
};

describe(`Testing PromoFilm component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const store = mockStore({
      GENRE: {
        genre: `All genres`
      },
      DATA: {
        films: [],
        loading: false
      },
      PROMO: {
        film,
        loading: false
      },
      USER: {
        authorizationStatus: `NO_AUTH`
      }
    });
    const component = renderer.create(<Provider store={store}>
      <Router history={history}>
        <PromoFilm userAuthStatus={"AUTH"} changeStatusFilm={() => {}} film={film} />
      </Router>
    </Provider>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
