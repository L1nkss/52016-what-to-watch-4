// Типы экшенов
const ActionType = {
  'CHANGE_FILTER_TYPE': `CHANGE_FILTER_TYPE`
};

// Максимальное количество фильмов на странице
const MAX_FILM_ON_PAGE = 8;

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

export {ActionType, MAX_FILM_ON_PAGE, CatalogList, TabList};
