// Типы экшенов
const ActionType = {
  'CHANGE_FILTER_TYPE': `CHANGE_FILTER_TYPE`
};

// Пути для роутинга
const RoutePathes = {
  ROOT: `/`,
  SIGN_IN: `/sign-in`,
  SERVER_ERROR: `/error`
};

// Каталог типов фильмов
const CatalogList = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

// Табы
const TabList = {
  activeTab: `Overview`,
  items: [`Overview`, `Details`, `Reviews`]
};

// Максимальное количество фильмов, которое можно вывести за 1 раз
const filmLimit = 8;

export {ActionType, CatalogList, TabList, filmLimit, RoutePathes};
