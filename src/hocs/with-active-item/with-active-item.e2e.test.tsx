import {mount} from "Enzyme";
import TabsItem from "@components/tabs/components/tabs-item";
import withActiveItem from "@hocs/with-active-item/with-active-item";

const ACTIVE_TAB = `Overview`;

describe(`Testing with active item HOC`, () => {
  it(`HOC should return component with active class`, () => {
    const tabName = `Overview`;
    const TabItemWrapper = withActiveItem(TabsItem, `mock-class`);
    const WrapperComponent = mount(<TabItemWrapper key={tabName} name={tabName} active={ACTIVE_TAB} />);
    expect(WrapperComponent.find(`.mock-class--active`)).toHaveLength(2);
  });
  it(`HOC should return component without active class`, () => {
    const tabName = `Details`;
    const TabItemWrapper = withActiveItem(TabsItem, `mock-class`);
    const WrapperComponent = mount(<TabItemWrapper key={tabName} name={tabName} active={ACTIVE_TAB} />);
    expect(WrapperComponent.find(`.mock-class--active`)).toHaveLength(0);
  });
});
