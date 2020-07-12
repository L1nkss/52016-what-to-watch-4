import MoreLikeFilms from "./more-like-films";

describe(`Testing More like films component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<MoreLikeFilms />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
