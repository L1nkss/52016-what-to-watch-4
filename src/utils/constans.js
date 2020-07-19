const baseUrl = `https://4.react.pages.academy`;

// Пути для роутинга
const RoutePathes = {
  ROOT: `/`,
  SIGN_IN: `/sign-in`,
  SERVER_ERROR: `/error`,
  ADD_REVIEW: `/add-review`,
  FILM_DETAIL: `/film-detail`
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

export {TabList, filmLimit, RoutePathes, baseUrl, ErrorCodes};
