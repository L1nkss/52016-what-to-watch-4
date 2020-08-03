import * as renderer from "react-test-renderer";
import CatalogItem from "@components/catalog-nav/components/catalog-item";

describe(`Testing catalog-item component`, () => {
  it(`Component should successfully rendered`, () => {
    const tree = renderer.create(<CatalogItem className={`class`} cb={() => {}} name={`Crime`}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
