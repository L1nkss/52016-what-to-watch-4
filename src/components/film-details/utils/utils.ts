import {textRatingInformation} from "../../../constants/constants";

const getFilmRating = (value: number) => {
  if (value >= textRatingInformation.Bad.min && value < textRatingInformation.Bad.max) {
    return textRatingInformation.Bad.value;
  }
  if (value >= textRatingInformation.Normal.min && value < textRatingInformation.Normal.max) {
    return textRatingInformation.Normal.value;
  }
  if (value >= textRatingInformation.Good.min && value < textRatingInformation.Good.max) {
    return textRatingInformation.Good.value;
  }
  if (value >= textRatingInformation.VeryGood.min && value < textRatingInformation.VeryGood.max) {
    return textRatingInformation.VeryGood.value;
  }
  if (value >= textRatingInformation.Awesome.min) {
    return textRatingInformation.Awesome.value;
  }
  return value;
};

const getDurationOfFilm = (time: number) => {
  const hours = (time / 60);
  const rHours = Math.floor(hours);
  const minutes = (hours - rHours) * 60;
  const rMinutes = Math.round(minutes);

  return `${rHours}h ${rMinutes}m`;
};

export {getFilmRating, getDurationOfFilm};
