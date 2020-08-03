import * as ShallowRenderer from 'react-test-renderer/shallow';
import FilmCard from "@components/film-card/film-card";

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 2
};

describe(`Testing FilmCard component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<FilmCard
      filmInfo={film}
      renderPlayer={() => <video />}
      handleMouseEnter={() => {}}
      handleMouseLeave={() => {}}/>);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
