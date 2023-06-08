export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/react/dont-cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  testMatch: ["**/*.test.ts?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    // "\\.(svg)$": "jest-transform-stub",
  },
};
