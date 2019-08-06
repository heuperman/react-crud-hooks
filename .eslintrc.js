module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['@typescript-eslint', 'react'],
    'rules': {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'max-len': ['error', {'code': 100}],
        'semi': 'error',
        'quotes': ['error', 'single']
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
