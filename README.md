# Windgazer ESLint configuration

This repository contains the base configurations for our BESTSELLER javascript style.

We have intentionally left the `env` property undefined, since this allows for generic
reuse of our styleguide on any project, be it browser or node related.

## Verify code-base

`npm run ci --silent` (the added --silent hides the npm log on non-zero exit).

## deploy code-base

Make sure you've increased the version-number in `package.json`.

`npm publish`
