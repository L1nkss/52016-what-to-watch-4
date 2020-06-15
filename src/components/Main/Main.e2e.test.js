import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';

// Моки
const mocks = [
  `Joker`,
  `Knifes out`,
  `1917`
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main Component`, () => {
  it(`Article should be clicked`, () => {
    const onArticleClick = jest.fn();
    const MainComponent = shallow(
        <Main filmData={mocks} onCardClick={onArticleClick}/>
    );

    const Articles = MainComponent.find(`.small-movie-card`);
    Articles.forEach((article) => article.simulate(`click`));
    expect(onArticleClick.mock.calls.length).toBe(3);
  });
});
