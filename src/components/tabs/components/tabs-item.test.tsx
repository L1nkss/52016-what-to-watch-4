import TabsItem from "@components/tabs/components/tabs-item";
import * as renderer from "react-test-renderer";

describe(`Testing Tabs item component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<TabsItem className={`active`} name={`item`} cb={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
