import FilmCard from './film-card';

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald`
};

const cb = () => {};

describe(`Testing FilmCard component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(<FilmCard name={film.name} image={film.image} onHoverCardHandler = {cb}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
