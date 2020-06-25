// Список фильмов
const films = [
  {
    name: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `Macbeth`,
    image: `img/macbeth.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    name: `Aviator`,
    image: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    name: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    name: `Johnny English`,
    image: `img/johnny-english.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    name: `Shutter Island`,
    image: `img/shutter-island.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

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
  Details: {
    director: `Wes Andreson`,
    starring: [
      `Wes Andreson`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Saoirse Ronan`,
      `Owen Wilkinson`,
      `Adrien Brody`,
      `Ralph Fiennes`,
      `Jeff Goldblum`
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
    },
    {
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      rating: `8,0`,
      date: `November 18, 2015`
    },
    {
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back`,
      author: `Amanda Greeverr`,
      rating: `8,0`,
      date: `November 18, 2015`
    },
    {
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back`,
      author: `Amanda Greever`,
      rating: `8,0`,
      date: `November 18, 2015`
    },
  ],
  Header: {
    poster: `the-grand-budapest-hotel-poster`,
    background: `bg-the-grand-budapest-hotel`,
    genre: `Drama`,
    year: 2014,
    name: `The Grand Budapest Hotel`
  }
};

export {films, detailFilmInformation};
