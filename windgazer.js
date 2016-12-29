// jscs:disable
module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "env": {
        "node": true,
    },
    "rules": {
        "array-bracket-spacing": [ "warn", "always" ],
        "block-spacing": [ "warn", "always" ],
        "comma-dangle": [ "warn", "always-multiline" ],
        "no-console": 0,
        "no-inner-declarations": [ "error", "both" ],
        "no-unused-vars": [ "warn", { "vars": "all", "args": "after-used" } ],
        "object-curly-spacing": [ "warn", "always" ],
        "quote-props": [ "warn", "always" ],
        "quotes": [ "warn", "double", { "allowTemplateLiterals": true, "avoidEscape": true } ],
        "space-before-blocks": [ "warn", "always" ],
        "space-in-parens": [ "warn", "always" ],
    },
};
