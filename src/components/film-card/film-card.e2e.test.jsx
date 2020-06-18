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
  it(`Should be clicked on title`, () => {
    const onTitleClickHandler = jest.fn();
    const Component = shallow(
        <FilmCard name={film.name} image={film.image} onClickCardHandler={onTitleClickHandler}/>
    );
    const Title = Component.find(`.small-movie-card__link`);
    Title.simulate(`click`);
    // Проверяем, что функция была вызвана 1 раз
    expect(onTitleClickHandler.mock.calls.length).toBe(1);
  });
  it(`Should be clicked on image of film`, () => {
    const onImageClickHandler = jest.fn();
    const Component = shallow(
        <FilmCard name={film.name} image={film.image} onClickCardHandler={onImageClickHandler}/>
    );
    const Title = Component.find(`.small-movie-card__image`);
    Title.simulate(`click`);
    // Проверяем, что функция была вызвана 1 раз
    expect(onImageClickHandler.mock.calls.length).toBe(1);
  });

});
