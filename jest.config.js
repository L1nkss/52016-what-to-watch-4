module.exports = {
  // Путь к настроечному файлу, который конфигурирует тестовую среду перед запуском
  "setupFiles": [`<rootDir>jest.setup.js`],
  "testURL": `http://localhost/`,
  "transform": {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  // Устанавливает флаг в true/false нужно ли показывать ошибки в консоли после выполнения тестов
  "verbose": true,
  // Ищет все файлы с тестовым названием
  "testRegex": `.test.(js?|jsx?|tsx?)$`,
  // "testRegex": `(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$`,
  // Расширение файлов, которые используются в проекте
  "moduleFileExtensions": [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
  "modulePaths": [`<rootDir>/src/components/`],
  "moduleNameMapper": {
    "^@components(.*)$": `<rootDir>/src/components$1`,
    "^@hocs(.*)$": `<rootDir>/src/hocs$1`,
    "^@reducer(.*)$": `<rootDir>/src/reducer$1`,
    "^@utils(.*)$": `<rootDir>/src/utils$1`,
    "^@redux(.*)$": `<rootDir>/src/redux$1`,
  },
  "coveragePathIgnorePatterns": [`/test.setup.js`]
};
