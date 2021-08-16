module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
	  'linebreak-style': 0,
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
    'no-console': ["error", {allow : ["warn", "error", "log"]}],
    'no-underscore-dangle': ["error", { "allowAfterThis": true }],
    'no-param-reassign': ["error", {"props" : false}],
    'quotes' : ["error", "single", {"allowTemplateLiterals": true}],
  },
};
