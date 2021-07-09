module.exports = {
  env: {
    mocha: true
  },
  globals: {
    'expect': true,
    'sinon': true
  },
  parserOptions: {
    'parser': 'babel-eslint',
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off'
  }
}
