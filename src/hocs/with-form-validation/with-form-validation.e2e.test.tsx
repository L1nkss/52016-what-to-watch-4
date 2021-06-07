import withFormValidation from "@hocs/with-form-validation/with-form-validation";
import {mount} from "enzyme";

const mockComponent = () => <div></div>;

describe(`Testing with form validatin HOC`, () => {
  it(`HOC should change state depends on value`, () => {
    const ComponentWrapper = withFormValidation(mockComponent);
    const wrapper = mount(<ComponentWrapper />);

    expect(wrapper.state().isError).toEqual(false);
    wrapper.instance().handleFormChange(25);
    expect(wrapper.state().isError).toEqual(true);
    wrapper.instance().handleFormChange(125);
    expect(wrapper.state().isError).toEqual(false);
  });
});
