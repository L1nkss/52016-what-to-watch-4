import PromoFilm from "@components/promo-film/promo-film";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const mockStore = configureStore([]);
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  id: 2,
  backgroundImage: `https://image.com`,
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
      <Router history={history}><PromoFilm changeStatusFilm={() => {}} film={film} loading={false} /></Router>
    </Provider>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
