module.exports = {
    "plugins": ["react", "jsx-a11y"],
    "extends": ['plugin:react/recommended', "plugin:jsx-a11y/recommended"],
    "settings": { "react": { "version": 'detect' } },
    "rules": {
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-useless-fragment": "error",
        "react/function-component-definition": [ 
          "error",
          { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }
        ],
    },
}