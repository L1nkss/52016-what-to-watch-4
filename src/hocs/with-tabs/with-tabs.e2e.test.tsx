import {mount} from "enzyme";
import withTabs from "@hocs/with-tabs/with-tabs";

const mockComponent = () => <div></div>;
const TAB_LIST = {
  ACTIVE_TAB: `Tab-1`,
  ITEMS: [`Tab-1`, `Tab-2`, `Tab-3`]
};

describe(`Testing with tabs HOC`, () => {
  it(`HOC should change active tab`, () => {
    const ComponentWrapper = withTabs(mockComponent, TAB_LIST);
    const wrapper = mount(<ComponentWrapper />);
    const newActiveTab = `Tab-3`;
    expect(wrapper.state().activeTab).toEqual(TAB_LIST.ITEMS[0]);

    wrapper.instance().handleTabClick(newActiveTab);

    expect(wrapper.state().activeTab).toEqual(newActiveTab);
  });
});
