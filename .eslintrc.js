module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "it": true,
    "expect": true,
    "sinon": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true,
    "project": "./tsconfig.json",
    "sourceType": "module",
  },
  "plugins": ["react","@typescript-eslint", "jest"],
  "rules": {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "true",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true
      },
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true, allowTypedFunctionExpressions: true
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true
      },
    ],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
  },
  extends: [
    "prettier",
  ]
}