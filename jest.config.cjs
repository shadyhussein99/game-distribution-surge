module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/$1",
    "^@app-components/(.*)$": "<rootDir>/src/components/$1",
    "^@app-lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@app-constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@app-types/(.*)$": "<rootDir>/src/types/$1",
    "^@app-store/(.*)$": "<rootDir>/src/store/$1",
    "^@app-icons/(.*)$": "<rootDir>/src/icons/$1",
    "^@app-hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx'
      }
    }
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
