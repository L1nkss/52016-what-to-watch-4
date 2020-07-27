// Базовый урл для запросов
const baseUrl = `https://4.react.pages.academy`;

// Информация по правилам формированию оценки
const textRatingInformation = {
  Bad: {
    value: `Bad`,
    min: 0,
    max: 3
  },
  Normal: {
    value: `Normal`,
    min: 3,
    max: 5
  },
  Good: {
    value: `Good`,
    min: 5,
    max: 8
  },
  VeryGood: {
    value: `Very good`,
    min: 8,
    max: 10
  },
  Awesome: {
    value: `Awesome`,
    min: 10
  }
};

// Пути для роутинга
const RoutePathes = {
  ROOT: `/`,
  SIGN_IN: `/sign-in`,
  SERVER_ERROR: `/error`,
  ADD_REVIEW: `/add-review`,
  FILM_DETAIL: `/film-detail`,
  MY_LIST: `/my-list`,
  PLAYER: `/player`
};

// Коды ошибок
const ErrorCodes = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

// Табы
const TabList = {
  activeTab: `Overview`,
  items: [`Overview`, `Details`, `Reviews`]
};

// Максимальное количество фильмов, которое можно вывести за 1 раз
const filmLimit = 8;

export {TabList, filmLimit, RoutePathes, baseUrl, ErrorCodes, textRatingInformation};
