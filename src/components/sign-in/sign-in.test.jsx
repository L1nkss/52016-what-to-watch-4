import SignIn from "@components/sign-in/sign-in.connect";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe(`Testing SignIn component`, () => {
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
    const component = renderer.create(<Provider store={store}><SignIn /></Provider>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
