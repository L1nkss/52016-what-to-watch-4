import * as renderer from "react-test-renderer";
import {ServerError} from "./server-error";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

describe(`Testing Server error component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}><ServerError /> </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
