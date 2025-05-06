module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsdoc'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true,
        es2022: true
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/check-values': 'warn',
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'indent': ['error', 4],
        'no-useless-escape': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
    ignorePatterns: ['dist/**', 'node_modules/**', 'package.json']
}; 