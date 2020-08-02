import * as renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const mockOne = {
  poster: `img/bohemian-rhapsody.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoRef: React.createRef(),
  setupRef: () => {}
};

describe(`Testing VideoPlayer component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(<VideoPlayer videoRef={mockOne.videoRef} setupRef={mockOne.setupRef} poster={mockOne.poster} src={mockOne.src} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
