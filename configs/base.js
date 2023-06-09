module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es2020": true,
    },
    "parserOptions": {
      "sourceType": "module",
    },
    "plugins": ["import", "prettier", "destructuring", "simple-import-sort"],
    "extends": ["eslint:recommended", "plugin:destructuring/recommended"],
    "rules": {
        "no-console": "warn",
        "import/prefer-default-export": "off",
        "destructuring/in-params": ["error", { "max-params": 0 }],
        "destructuring/no-rename": "off",
        "no-console": "error",
        "no-debugger": "warn",
        "no-eval": "off",
        "no-shadow": "error",
        "prefer-const": "error",
        "no-restricted-exports": "off",
        "camelcase": "error",
        "arrow-body-style": "always",
        "import/extensions": "off",
        "import/no-anonymous-default-export": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-import-module-exports": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "prettier/prettier": [
          "error",
          {
            "singleQuote": true,
            "trailingComma": "all",
            "printWidth": 120,
            "arrowParens": "always"
          }
        ],
    }
}