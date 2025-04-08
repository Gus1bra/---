module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Для работы с браузерной средой
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Для дополнительных матчеров от jest-dom
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Преобразование TypeScript в код для тестирования
  },
  moduleNameMapper: {
    // Маппинг для импорта путей, если используется алиас
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Игнорирование ненужных путей
};
