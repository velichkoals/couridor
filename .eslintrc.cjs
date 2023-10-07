module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    "prettier",
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    '@typescript-eslint',
    "react",
    "react-hooks",
    "prettier",
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/exhaustive-deps": "off",
    "camelcase": "off",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "quotes": "off",
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": 'off',
    "react/no-unescaped-entities": "off"
  }
}
