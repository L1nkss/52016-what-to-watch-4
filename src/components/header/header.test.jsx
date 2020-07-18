import {Header} from "./header";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

describe(`Testing Header component`, () => {
  it(`Component should successfully rendered`, () => {
    const userAuthStatus = `NO_AUTH`;
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}><Header userAuthStatus={userAuthStatus} /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
