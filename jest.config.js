module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)?$": "ts-jest",
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!(use-long-press" + ")/)"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
  };
};
