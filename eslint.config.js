import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            jsdoc: jsdoc,
            '@typescript-eslint': tseslint,
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'no-console': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/check-values': 'warn',
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'indent': ['error', 4, {
                'SwitchCase': 1,
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'FunctionExpression': {
                    'parameters': 'first'
                }
            }],
            'no-useless-escape': 'warn'
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
]; 