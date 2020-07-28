import Reviews from "@components/film-details/components/reviews/reviews";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  reviews: state.REVIEWS.reviews,
  loading: state.REVIEWS.loading
});

export {Reviews};
export default connect(mapStateToProps, null)(Reviews);
