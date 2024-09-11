import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['warn', prettierConfig],
    },
  },
];
