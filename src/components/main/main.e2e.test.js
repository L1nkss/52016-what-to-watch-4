import Main from './main';

// Моки
const films = [
  {
    name: `Bohemian Rhapsody`,
    image: `bohemian-rhapsody`
  },
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `fantastic-beasts-the-crimes-of-grindelwald`
  },
  {
    name: `Macbeth`,
    image: `macbeth`
  },
  {
    name: `Aviator`,
    image: `aviator`
  },
  {
    name: `We need to talk about Kevin`,
    image: `we-need-to-talk-about-kevin`
  },
  {
    name: `What We Do in the Shadows`,
    image: `what-we-do-in-the-shadows`
  },
  {
    name: `Johnny English`,
    image: `johnny-english`
  },
  {
    name: `Shutter Island`,
    image: `shutter-island`
  },
];


describe(`Main Component`, () => {
  it(`Article should be clicked`, () => {
    const onArticleClick = jest.fn();
    const MainComponent = shallow(
        <Main filmData={films} onCardClick={onArticleClick}/>
    );

    const Articles = MainComponent.find(`.small-movie-card`);
    Articles.forEach((article) => article.simulate(`click`));
    expect(onArticleClick.mock.calls.length).toBe(films.length);
  });
});
