import {connect} from "react-redux";
import Player from "@components/player/player";
import {selectFilmById} from "@utils/selectors";

const mapStateToProps = (state, props) => ({
  film: selectFilmById(Number(props.match.params.id), state)
});


export default connect(mapStateToProps, null)(Player);
