import CatalogNav from "@components/catalog-nav/catalog-nav.connect";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`Testing catalog-nav component`, () => {
  it(`Component should successfully rendered`, () => {
    const store = mockStore({
      GENRE: {
        genre: `All genres`
      }
    });
    const tree = renderer.create(<Provider store={store}><CatalogNav /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
