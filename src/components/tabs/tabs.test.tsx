import * as ShallowRenderer from 'react-test-renderer/shallow';
import Tabs from "@components/tabs/tabs";

const TABS = [`Overview`, `Details`, `Reviews`];

describe(`Testing Tabs component`, () => {
  it(`Component should successfully rendered`, () => {
    const myShallowRenderer = ShallowRenderer.createRenderer();
    myShallowRenderer.render(<Tabs activeTab={`Overview`} tabs={TABS} handleTabClick={() => {}} />);
    const result = myShallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
