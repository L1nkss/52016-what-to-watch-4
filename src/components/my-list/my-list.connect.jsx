import MyList from "@components/my-list/my-list";
import {connect} from "react-redux";
import {getFavoriteFilms} from "@components/my-list/selectors/selectors";

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state)
});

export default connect(mapStateToProps, null)(MyList);
