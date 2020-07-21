import ActionType from "@reducer/favorite/constants/constants";
import ActionCreator from "@reducer/favorite/actions/actions";

const initialState = {
  films: null,
  loading: false,
  error: false
};

const Operation = {
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadFavoriteFilmsRequest());
    return api.getFavorite()
      .then((response) => console.log(response));
  }
}
