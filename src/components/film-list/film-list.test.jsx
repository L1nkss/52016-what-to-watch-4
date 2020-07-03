import FilmList from "./film-list.connect";
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

describe(`Testing FilmList component`, () => {
  it(`Component should successfully rendered`, () => {
    const store = mockStore({
      genre: `All genres`,
      films
    });
    const component = renderer.create(<Provider store={store}><FilmList changePath={cb} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
