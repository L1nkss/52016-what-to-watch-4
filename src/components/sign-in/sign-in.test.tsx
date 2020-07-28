import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "@components/sign-in/sign-in.connect";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {createMemoryHistory} from "history";
import {Router} from "react-router";

const mockStore = configureStore([]);

describe(`Testing SignIn component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
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
    const component = renderer.create(<Provider store={store}>
      <Router history={history}><SignIn /></Router>
    </Provider>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
