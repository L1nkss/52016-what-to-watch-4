import * as renderer from "react-test-renderer";
import {Header} from "./header";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const userInfo = {
  id: 1,
  email: `qwe@mail.ru`,
  name: `Morgan`,
  avatarUrl: `https://test.ru`
};

describe(`Testing Header component`, () => {
  it(`Component should successfully rendered`, () => {
    const userAuthStatus = `NO_AUTH`;
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}>
      <Header userInformation={userInfo} userAuthStatus={userAuthStatus} />
    </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
