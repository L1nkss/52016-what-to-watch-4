import * as React from "react";
import * as renderer from "react-test-renderer";
import {ServerError} from "./server-error";

describe(`Testing Server error component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<ServerError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
