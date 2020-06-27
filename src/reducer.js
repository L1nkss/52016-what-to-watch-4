import {films} from "./mocks/mocks";

const initialState = {
  genres: [
    `All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`
  ],
  filmns: films
};


const reducer = (state = initialState, action) => {
  return state;
};

export {reducer};
