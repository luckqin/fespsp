# fespsp

🎃 Frontend Super Supervisor - 前端项目代码规范

> Frontend Super Supervisor 用于管理前端项目的代码规范

### Feature

🎉 Support ESLint preset config for .vue, .js, .ts, .tsx file.

🎉 Support Prettier preset config.

### Install

```
yarn add -D eslint typescript prettier
yarn add -D eslint-config-fespsp
yarn add -D prettier-config-fespsp
```

### ESLint

#### 1. Create `.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: ['eslint-config-fespsp'],
  rules: {
    // Custom Rules
    // ...
  }
};
```

#### 2. Create `.lintstagedrc`

```js
{
  "**/*.{js,jsx,ts,tsx,vue}": "eslint"
}
```

#### 3. Create `.eslintignore`

```ignorelang
node_modules
```

#### 4. Add lint command

Add `"lint": "eslint --ext .js,.jsx,.ts,.tsx,.vue ."` to package.json's scripts

`yarn lint`：check full code
`yarn lint --fix`：automatically fix most problems with full code

### Prettier

1. Create `.prettierrc.js`

```js
module.exports = {
  ...require('prettier-config-fespsp'),
  // Custom Config
};
```

> If you want to know more about prettier configuration, you can see https://prettier.io/docs/en/configuration.html
