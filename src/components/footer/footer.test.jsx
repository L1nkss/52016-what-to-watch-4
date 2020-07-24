import {Footer} from "./footer";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

describe(`Testing Footer component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}><Footer /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
