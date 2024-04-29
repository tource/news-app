# 프로젝트 생성

- `npx create-react-app ./`
- `npm install normalize.css`
- `npm install @emotion/react`
- `npm install @emotion/styled`

- .prettierrc.json

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- `npm install eslint --dev`
- `npm install eslint-config-react-app --save-dev`
- `npx eslint --init`
- `npm install eslint-config-prettier --save-dev`

- .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
  },
};
```

- `npm install @babel/plugin-proposal-private-property-in-object --dev`
- `npm install react-router-dom`
