import {Loading} from "./loading";

describe(`Testing Loading component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
