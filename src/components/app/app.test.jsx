import App from './app';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {Api} from "../../api";

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
      .create(<Provider store={store}><App
        films={films}
        isDataLoading={false}
        isError={false}
        promoFilm={films[0]}
        loadFilms={() => {}}
        loadPromoFilm={() => {}}
        loadFavoritesFilms={() => {}}
        checkAuthStatus={() => {}}
        isUserStatusChecked={true}
      /></Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
