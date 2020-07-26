import {textRatingInformation} from "../../../constants/constants";

const getFilmRating = (value: number) => {
  if (value >=textRatingInformation.Bad.min && value < textRatingInformation.Bad.max) {
    return textRatingInformation.Bad.value
  }
  if (value >=textRatingInformation.Normal.min && value < textRatingInformation.Normal.max) {
    return textRatingInformation.Normal.value
  }
  if (value >= 5 && textRatingInformation.Good.min < textRatingInformation.Good.max) {
    return textRatingInformation.Good.value
  }
  if (value >=textRatingInformation.VeryGood.min && value < textRatingInformation.VeryGood.max) {
    return textRatingInformation.VeryGood.value
  }
  if (value >= textRatingInformation.Awesome.min) {
    return textRatingInformation.Awesome.value
  }
};

export {getFilmRating};
