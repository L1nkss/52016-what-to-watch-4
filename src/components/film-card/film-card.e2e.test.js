import FilmCard from './film-card';

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald`
};

describe(`Testing e2e FilmCard component`, () => {
  it(`Should transfer information about article to callback`, () => {
    const onArticleHoverHandler = jest.fn();
    const Component = shallow(
        <FilmCard name={film.name} image={film.image} onHoverCardHandler={onArticleHoverHandler}/>
    );
    const Card = Component.find(`.small-movie-card`);
    Card.simulate(`mouseenter`);
    // Проверить, что при mouseenter событие в callback передается название фильма
    expect(onArticleHoverHandler).toHaveBeenCalledWith(film.name);
  });
});
