import * as React from "react";
import * as renderer from "react-test-renderer";
import {Reviews} from "./reviews.connect";

const reviews = [
  {
    rating: 6,
    id: 5,
    comment: `Text`,
    user: {
      name: `Maxim`
    }
  },
  {
    id: 10,
    rating: 10,
    comment: `Text new`,
    user: {
      name: `Maxim`
    }
  }
];

describe(`Testing reviews component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<Reviews loading={false} reviews={reviews} getReviews={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
