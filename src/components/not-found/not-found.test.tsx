import * as React from "react";
import * as renderer from "react-test-renderer";
import {NotFound} from "./not-found";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

describe(`Testing Not Found component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const tree = renderer.create(<Router history={history}><NotFound /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
