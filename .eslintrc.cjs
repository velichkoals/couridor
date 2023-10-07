module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    "prettier",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "overrides": [
  ],
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
    "no-use-before-define": 'off',
    "import/extensions": "off",
    "react/no-unescaped-entities": "off"
  }
}
