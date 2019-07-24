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
        'comma-dangle': 'error',
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2],
        'max-len': 'error',
        'semi': 'error',
        'quotes': ['error', 'single']
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
