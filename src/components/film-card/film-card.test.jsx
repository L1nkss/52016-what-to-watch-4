import FilmCard from "@components/film-card/film-card";

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`Testing FilmCard component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(
        <FilmCard
          filmInfo={film}
          renderPlayer={() => {}}
          onHoverCardHandler = {() => {}}
          handleMouseEnter = {() => {}}
          handleMouseLeave = {() => {}}
          onClickCardHandler = {() => {}}
        />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
