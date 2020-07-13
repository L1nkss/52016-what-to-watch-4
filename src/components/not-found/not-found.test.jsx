import {NotFound} from "./not-found";

describe(`Testing Not Found component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
