import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmDetails from "./film-details";
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import * as ShallowRenderer from 'react-test-renderer/shallow';

const mockStore = configureStore([]);
// Полная информация о фильме
const filmInformation = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideoLink: `img/bohemian-rhapsody.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  released: 2015,
  starring: ['Name One', 'Name Two'],
  id: 1
};
const store = mockStore({
  GENRE: {
    genre: `All genres`
  },
  DATA: {
    films: [filmInformation, filmInformation],
    loading: false
  },
  PROMO: {
    film: filmInformation,
    loading: false
  },
  USER: {
    authorizationStatus: `NO_AUTH`
  }
});

const tabs = {
  activeTab: `Overview`,
  names: [`Overview`, `Details`, `Reviews`]
};

describe(`Testing FilmDetails component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<FilmDetails
      details={filmInformation}
      getReviews={() => {}}
      userAuthStatus={"AUTH"}
      activeTab={tabs.activeTab}
      changeStatusFilm={() => {}}
      handleTabClick={() => {}}
      tabs={tabs.names} />);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
    // const history = createMemoryHistory(`/sign-in`);
    // const component = mount(
    //   <Provider store={store}>
    //   <Router history={history}>
    //     <FilmDetails
    //       activeTab={tabs.activeTab}
    //       handleTabClick={() => {}}
    //       details={filmInformation}
    //       tabs={tabs.names}
    //       changeStatusFilm={() => {}}
    //       getReviews={() => {}}
    //       userAuthStatus="AUTH" />
    //   </Router>
    //   </Provider>
    // );
    // expect(component).toMatchSnapshot();
  });
});
