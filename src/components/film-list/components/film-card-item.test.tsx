import * as React from "react";
import * as renderer from "react-test-renderer";
import * as ShallowRenderer from 'react-test-renderer/shallow';
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import FilmCardItem from "@components/film-list/components/film-card-item";
import {mount} from "enzyme";

const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 2
};

describe(`Testing film card item component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<FilmCardItem data={film}/>);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
    // const tree = mount(<Router history={history}>
    //   <FilmCardItem data={film}/>
    // </Router>);
    // expect(tree).toMatchSnapshot();
  })
});
