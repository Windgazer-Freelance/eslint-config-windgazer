# Windgazer ESLint configuration

This repository contains the base configurations for our Windgazer javascript style.

We have intentionally left the `env` property undefined, since this allows for generic
reuse of our styleguide on any project, be it browser or node related.

## Recommended use

### Installation

`npm i -D @windgazer/eslint-config-windgazer`

### Configuration

In `package.json` add the following block of JSON to the top-level:

```json
  "eslintConfig": {
    "extends": [
      "@windgazer/eslint-config-windgazer"
    ],
    "env": {
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 8
    }  
  }
```

Make note, the above is only a reasonable setting in which using e6 with some of the more recent syntax upgrades is entirally encouraged :).

## Verify code-base

`npm run ci --silent` (the added --silent hides the npm log on non-zero exit).

## deploy code-base

Make sure you've increased the version-number in `package.json`.

`npm publish --access=public`
