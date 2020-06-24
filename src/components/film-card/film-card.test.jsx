// import FilmCard from './film-card';
import FilmCard from "@components/film-card/film-card";

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald`
};

const cb = () => {};

describe(`Testing FilmCard component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(<FilmCard filmInfo={film} onHoverCardHandler = {cb}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
