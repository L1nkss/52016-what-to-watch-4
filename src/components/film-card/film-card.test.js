import FilmCard from './film-card';

describe(`Testing Film Card component`, () => {
  it(`Should render Film Card component`, () => {
    const component = renderer.create(<FilmCard/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
