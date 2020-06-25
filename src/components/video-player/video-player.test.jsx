import VideoPlayer from "./video-player";

const mockOne = {
  poster: `img/bohemian-rhapsody.jpg`,
  isActive: false,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};
const mockTwo = {
  poster: `img/bohemian-rhapsody.jpg`,
  isActive: true,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`Testing VideoPlayer component`, () => {
  it(`Component should successfully rendered if isActive is false`, () => {
    const component = renderer.create(<VideoPlayer poster={mockOne.poster} isActive={mockOne.isActive} src={mockOne.src}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Component should successfully rendered if isActive is true`, () => {
    const component = renderer.create(<VideoPlayer poster={mockTwo.poster} isActive={mockTwo.isActive} src={mockTwo.src}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
