import globals from 'globals';
import eslint from 'eslint';
import vueParser from 'vue-eslint-parser'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier';
import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import nuxt from 'eslint-plugin-nuxt';
import vitest from 'eslint-plugin-vitest';

export default [
  {
    ignores: [
      "**/*.spec.js",
      ".nuxt",
      ".cache",
      ".nitro",
      "node_modules",
      "dist",

    ]
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 2025,
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
      }
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/assets/main.css",
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue,
      nuxt,
      vitest,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...nuxt.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/require-default-prop': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off'
    }
  },
]
