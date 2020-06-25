import FilmDetails from "./film-details";

// Полная информация о фильме
const detailFilmInformation = {
  Overview: {
    rating: 240,
    score: 8.9,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
  },
  Header: {
    poster: `the-grand-budapest-hotel-poster`,
    background: `bg-the-grand-budapest-hotel`,
    genre: `Drama`,
    year: 2014,
    name: `The Grand Budapest Hotel`
  }
};

const tabs = [`Overview`, `Details`, `Reviews`];

describe(`Testing FilmDetails component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(<FilmDetails data={detailFilmInformation} tabs={tabs} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
