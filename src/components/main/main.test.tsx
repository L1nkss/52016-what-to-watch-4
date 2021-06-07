import * as ShallowRenderer from 'react-test-renderer/shallow';
import Main from './main';

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
    id: 1,
    isFavorite: false
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
    id: 2,
    isFavorite: false
  },
];

describe(`Testing Main component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<Main promoFilm={films[0]} films={films} isError={false}/>);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
