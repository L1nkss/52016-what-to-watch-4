import * as React from "react";
import * as renderer from "react-test-renderer";
import AddReview from "@components/add-review/add-review";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const mockStore = configureStore([]);
const history = createMemoryHistory(`/sign-in`);

const film = {
  id: 1,
  backgroundImage: 'https://test.ru',
  name: 'Film',
  posterImage: 'https://image.com'
};

describe(`Testing AddReview component`, () => {
  it(`Component should successfully rendered`, () => {
    const store = mockStore({
      GENRE: {
        genre: `All genres`
      },
      DATA: {
        films: [],
        loading: false
      },
      PROMO: {
        film: {},
        loading: false
      },
      USER: {
        authorizationStatus: `NO_AUTH`
      }
    });
    const component = renderer.create(
      <Router history={history}>
      <Provider store={store}>
      <AddReview details={film} isError={false} isLoading={false} onSubmit={() => {}} />
    </Provider>
      </Router>
        ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
