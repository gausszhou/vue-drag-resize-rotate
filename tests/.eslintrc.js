module.exports = {
  env: {
    jest: true
  },
  globals: {
    expect: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "no-unused-expressions": "off"
  }
};
