import FilmList from "./film-list";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
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

describe(`Testing FilmList component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
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
    const component = renderer.create(<Router history={history}><Provider store={store}><FilmList visible={8} changeVisible={() => {}} films={[]} /></Provider></Router>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
