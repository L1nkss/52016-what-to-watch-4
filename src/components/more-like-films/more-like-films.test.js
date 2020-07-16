import MoreLikeFilms from "./more-like-films";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

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

describe(`Testing More like films component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}><MoreLikeFilms films={films} /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
