module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "sourceType": "module",
    },
    "plugins": ["import"],
    "extends": "eslint:recommended",
    "rules": {
        "no-console": "warn",
        "import/prefer-default-export": "off",
    }
}