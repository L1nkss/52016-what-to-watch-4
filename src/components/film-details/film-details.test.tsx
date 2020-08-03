import FilmDetails from "./film-details";
import * as ShallowRenderer from 'react-test-renderer/shallow';

// Полная информация о фильме
const filmInformation = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `img/bohemian-rhapsody.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  released: 2015,
  starring: [`Name One`, `Name Two`],
  id: 1
};

const tabs = {
  activeTab: `Overview`,
  names: [`Overview`, `Details`, `Reviews`]
};

describe(`Testing FilmDetails component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<FilmDetails
      details={filmInformation}
      getReviews={() => {}}
      userAuthStatus={`AUTH`}
      activeTab={tabs.activeTab}
      changeStatusFilm={() => {}}
      handleTabClick={() => {}}
      tabs={tabs.names} />);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
