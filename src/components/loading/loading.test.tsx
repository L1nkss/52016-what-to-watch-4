import {Loading} from "./loading";
import * as renderer from "react-test-renderer";

describe(`Testing Loading component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
