module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prefer-destructuring": ["error", {
            "array": true,
            "object": false
        }],
        "import/no-extraneous-dependencies": [2, { devDependencies: true }]
    },
};