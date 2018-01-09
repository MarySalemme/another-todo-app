module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prefer-destructuring": ["error", {
            "array": true,
            "object": false
        }, {
            "enforceForRenamedProperties": false
        }]
    },
};