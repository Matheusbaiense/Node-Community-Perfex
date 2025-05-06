module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:n8n-nodes-base/nodes',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-var-requires': 'off',
        'n8n-nodes-base/node-param-operation-option-action-verb': 'off',
        'n8n-nodes-base/node-param-operation-option-description': 'off',
        'n8n-nodes-base/node-param-collection-type-unsorted-items': 'off',
    },
    ignorePatterns: ['dist/**/*', 'node_modules/**/*'],
}; 