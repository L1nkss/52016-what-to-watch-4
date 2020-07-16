import AddReview from "@components/add-review/add-review";


describe(`Testing AddReview component`, () => {
  it(`Component should successfully rendered`, () => {
    const component = renderer.create(<AddReview isError={false} isLoading={false} onSubmit={() => {}} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
