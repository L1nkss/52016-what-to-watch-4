import FilmDetails from "./film-details";

// Полная информация о фильме
const detailFilmInformation = {
  Overview: {
    rating: 240,
    score: 8.9,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    texts: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ]
  },
  Header: {
    poster: `the-grand-budapest-hotel-poster`,
    background: `bg-the-grand-budapest-hotel`,
    genre: `Drama`,
    year: 2014,
    name: `The Grand Budapest Hotel`
  },
  Details: {
    director: `Wes Andreson`,
    starring: [
      `Wes Andreson`
    ],
    runTime: `1h 39m`,
    genre: `Comedy`,
    released: 2014
  },
  Reviews: [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      rating: `8,9`,
      date: `December 24, 2016`
    }
  ]
};

const tabs = {
  activeTab: `Overview`,
  names: [`Overview`, `Details`, `Reviews`]
};

describe(`Testing FilmDetails component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(
        <FilmDetails activeTab={tabs.activeTab} handleTabClick={() => {}} data={detailFilmInformation} tabs={tabs.names} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
