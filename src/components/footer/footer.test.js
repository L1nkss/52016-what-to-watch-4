import {Footer} from "./footer";

describe(`Testing Footer component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
