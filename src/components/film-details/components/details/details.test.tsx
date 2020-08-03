import * as React from "react";
import * as renderer from "react-test-renderer";
import Details from "@components/film-details/components/details/details";

const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `img/bohemian-rhapsody.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  released: 2015,
  id: 2,
  runTime: 198,
  starring: [`One`, `Two`],
  director: `Me`,
  isFavorite: false
};

describe(`Testing details component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<Details data={film}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
