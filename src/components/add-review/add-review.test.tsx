import * as ShallowRenderer from 'react-test-renderer/shallow';
import {AddReview} from "@components/add-review/add-review.connect";

const film = {
  id: 1,
  backgroundImage: `https://test.ru`,
  name: `Film`,
  posterImage: `https://image.com`
};

describe(`Testing AddReview component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<AddReview
      details={film}
      isError={false}
      isLoading={false}
      handleFormChange={() => {}}
      onSubmit={() => {}} />);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
