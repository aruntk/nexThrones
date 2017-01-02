module.exports = {
  extends: 'airbnb',
  env: {
    mocha: true,
    node: true,
    browser: true,
    serviceworker: true,
  },
  installedESLint: true,
  plugins: ['mocha'],
  globals: {
    alert: true,
    console: true,
    _: true,
    navigator: true,
    escape: true,
    module: true,
    require: true,
    document: true,
  },
  rules: {
    camelcase: ['error', { properties: 'never' }],
    'no-underscore-dangle': 0,
    'semi': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
  },
};
