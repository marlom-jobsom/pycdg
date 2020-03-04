module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    rules: {
        'no-console': 'warn',
        'semi': [
            2,
            'never'
        ],
        'indent': [
            'error',
            2
        ],
        'quotes': [
            'error',
            'single'
        ]
    }
}