import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmCard from "@components/film-card/film-card";
import {Router} from "react-router";
import {createMemoryHistory} from "history";

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 2
};

describe(`Testing FilmCard component`, () => {
  it(`Component should successfully rendered`, () => {
    const history = createMemoryHistory(`/sign-in`);
    const component = renderer.create(
        <Router history={history}>
          <FilmCard
            filmInfo={film}
            renderPlayer={() => <video />}
            handleMouseEnter = {() => {}}
            handleMouseLeave = {() => {}}
          />
        </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
