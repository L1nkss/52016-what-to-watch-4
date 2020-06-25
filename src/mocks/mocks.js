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
  Header: {
    poster: `the-grand-budapest-hotel-poster`,
    background: `bg-the-grand-budapest-hotel`,
    genre: `Drama`,
    year: 2014,
    name: `The Grand Budapest Hotel`
  }
};

export {films, detailFilmInformation};
