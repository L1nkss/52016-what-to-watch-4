import {mount} from "enzyme";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";

type TMockComponent = {
  handleClick: () => void,
  handleMouseEnter: () => void
}

const MockComponent = (props: TMockComponent) => {
  const {handleClick, handleMouseEnter} = props;
  return (
    <div onMouseEnter={handleMouseEnter} onClick={handleClick}>
    </div>
  );
};
// Моки
const film = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: 2
};

describe(`Testing with video player HOC`, () => {
  it(`HOC should run video when mouse enters`, () => {
    const ComponentWrapper = withVideoPlayer(MockComponent);
    const wrapper = mount(<ComponentWrapper filmInfo={film} />);
    expect(wrapper.instance()._debounce).toEqual(null);
    wrapper.simulate(`mouseenter`);
    expect(wrapper.instance()._debounce).not.toEqual(null);
  });
});
