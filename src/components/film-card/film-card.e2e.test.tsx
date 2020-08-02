import FilmCard from './film-card';
import {shallow} from "enzyme";

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `path`,
  id: 1
};

describe(`Testing e2e FilmCard component`, () => {
  it(`Should return true when mouseEnter`, () => {
    const onCardMouseEnter = jest.fn(() => true);
    const Component = shallow(
        <FilmCard
          filmInfo={film}
          renderPlayer={() => <video />}
          handleMouseEnter={onCardMouseEnter}
          handleMouseLeave={() => {}}
        />
    );
    const Article = Component.find(`.small-movie-card`);
    Article.simulate(`mouseover`);
    expect(onCardMouseEnter.mock.calls.length).toBe(1);
  });
  it(`Should return false when mouseLeave`, () => {
    const onCardMouseLeave = jest.fn(() => false);
    const Component = shallow(<FilmCard
      filmInfo={film}
      renderPlayer={() => <video />}
      handleMouseLeave={onCardMouseLeave}
      handleMouseEnter={() => {}}
    />
    );
    Component.simulate(`mouseleave`);
    expect(onCardMouseLeave.mock.calls.length).toBe(1);
  });

});
