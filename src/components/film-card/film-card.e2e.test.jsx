import FilmCard from './film-card';

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald`,
  preview: `path`
};

const renderPlayerMock = jest.fn();
const clickHandlerMock = jest.fn();

describe(`Testing e2e FilmCard component`, () => {
  it(`Should be clicked on title`, () => {
    const onTitleClickHandler = jest.fn();
    const Component = shallow(
        <FilmCard filmInfo={film} renderPlayer={renderPlayerMock} onClickCardHandler={onTitleClickHandler}/>
    );
    const Title = Component.find(`.small-movie-card__link`);
    Title.simulate(`click`);
    // Проверяем, что функция была вызвана 1 раз
    expect(onTitleClickHandler.mock.calls.length).toBe(1);
  });
  it(`Should be clicked on image of film`, () => {
    const onImageClickHandler = jest.fn();
    const Component = shallow(
        <FilmCard filmInfo={film} renderPlayer={renderPlayerMock} onClickCardHandler={onImageClickHandler}/>
    );
    const Title = Component.find(`.small-movie-card__image`);
    Title.simulate(`click`);
    // Проверяем, что функция была вызвана 1 раз
    expect(onImageClickHandler.mock.calls.length).toBe(1);
  });
  it(`Should return true when mouseEnter`, () => {
    const onCardMouseEnter = jest.fn(() => true);
    const Component = shallow(
        <FilmCard filmInfo={film} renderPlayer={renderPlayerMock} onClickCardHandler={clickHandlerMock} handleMouseEnter={onCardMouseEnter}/>
    );
    const Article = Component.find(`.small-movie-card`);
    Article.simulate(`mouseover`);
    expect(onCardMouseEnter.mock.calls.length).toBe(1);
  });
  it(`Should return false when mouseLeave`, () => {
    const onCardMouseLeave = jest.fn(() => false);
    const Component = shallow(
        <FilmCard filmInfo={film} renderPlayer={renderPlayerMock} onClickCardHandler={clickHandlerMock} handleMouseLeave={onCardMouseLeave}/>
    );
    Component.simulate(`mouseleave`);
    expect(onCardMouseLeave.mock.calls.length).toBe(1);
  });

});
