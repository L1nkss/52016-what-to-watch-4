import * as ShallowRenderer from 'react-test-renderer/shallow';
import FilmCardItem from "@components/film-list/components/film-card-item";

const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 2
};

describe(`Testing film card item component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<FilmCardItem data={film}/>);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
