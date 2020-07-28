import * as React from "react";
import * as renderer from "react-test-renderer";
import * as ShallowRenderer from 'react-test-renderer/shallow';
import Main from './main';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router";
import {createMemoryHistory} from "history";
import thunk from 'redux-thunk';
import {mount} from "enzyme";

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// Моки
const films = [
  {
    name: `Bohemian Rhapsody`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015,
    id: 1,
    isFavorite: false
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    released: 2015,
    id: 2,
    isFavorite: false
  },
];

describe(`Testing Main component`, () => {
  it(`Component should successfully rendered`, () => {
    // const history = createMemoryHistory(`/sign-in`);
    // const cb = () => {};
    // const store = mockStore({
    //   GENRE: {
    //     genre: `All genres`
    //   },
    //   DATA: {
    //     films,
    //     loading: false,
    //     error: false
    //   },
    //   PROMO: {
    //     film: films[0],
    //     loading: false,
    //     error: false
    //   },
    //   USER: {
    //     authorizationStatus: `NO_AUTH`
    //   }
    // });
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<Main promoFilm={films[0]} films={films}/>);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
    // const tree = mount(<Provider store={store}>
    //     <Router history={history}>
    //       <Main
    //         promoFilm={films[0]}
    //         films={films}
    //       />
    //     </Router>
    //   </Provider>);
    //
    // expect(tree).toMatchSnapshot();
  });
});
