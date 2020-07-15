import AddReview from "@components/add-review/add-review";
import {connect} from "react-redux";
import {selectFilmById} from "../../utils/selectors";
import {Operation} from "../../reducer/review/review";


const mapStateToProps = (state, props) => ({
  details: selectFilmById(Number(props.match.params.id), state),
  isLoading: state.REVIEW.loading,
  isError: state.REVIEW.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data) {
    dispatch(Operation.postReview(id, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
