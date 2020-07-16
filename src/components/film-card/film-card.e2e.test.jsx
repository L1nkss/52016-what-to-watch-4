import FilmCard from './film-card';

// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `path`,
  id: 1
};

describe(`Testing e2e FilmCard component`, () => {
  // TODO: переделать с учетом <Link>
  // it(`Should be clicked on title`, () => {
  //   const history = createMemoryHistory(`/sign-in`);
  //   const Component = mount(
  //       <Router history={history}>
  //         <FilmCard
  //           filmInfo={film}
  //           renderPlayer={() => {}}
  //           handleMouseEnter={() => {}}
  //           handleMouseLeave={() => {}}
  //         />
  //       </Router>
  //   );
  //   const link = Component.find(`Link`).first();
  //   link.simulate('click',  {button: 0});
  //   expect(link.calls.length).toBe(1);
  // });
  // it(`Should be clicked on image of film`, () => {
  //   const onImageClickHandler = jest.fn();
  //   const Component = shallow(
  //       <FilmCard
  //         filmInfo={film}
  //         renderPlayer={() => {}}
  //         onClickCardHandler={onImageClickHandler}
  //         handleMouseEnter={() => {}}
  //         handleMouseLeave={() => {}}
  //       />
  //   );
  //   const Title = Component.find(`.small-movie-card__image`);
  //   Title.simulate(`click`);
  //   // Проверяем, что функция была вызвана 1 раз
  //   expect(onImageClickHandler.mock.calls.length).toBe(1);
  // });
  it(`Should return true when mouseEnter`, () => {
    const onCardMouseEnter = jest.fn(() => true);
    const Component = shallow(
        <FilmCard
          filmInfo={film}
          renderPlayer={() => {}}
          onClickCardHandler={() => {}}
          handleMouseEnter={onCardMouseEnter}
          handleMouseLeave={() => {}}
        />
    );
    const Article = Component.find(`.small-movie-card`);
    Article.simulate(`mouseover`);
    expect(onCardMouseEnter.mock.calls.length).toBe(1);
  });
  it(`Should return false when mouseLeave`, () => {
    const onCardMouseLeave = jest.fn(() => false);
    const Component = shallow(
        <FilmCard
          filmInfo={film}
          renderPlayer={() => {}}
          onClickCardHandler={() => {}}
          handleMouseLeave={onCardMouseLeave}
          handleMouseEnter={() => {}}
        />
    );
    Component.simulate(`mouseleave`);
    expect(onCardMouseLeave.mock.calls.length).toBe(1);
  });

});
