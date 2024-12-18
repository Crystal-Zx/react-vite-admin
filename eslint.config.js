import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'no-unused-vars': 'warn', // 变量声明但未使用时提示警告
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 副作用，就是单纯 import 没 from
            ['^\\u0000'],
            // react 全家桶
            ['^react'],
            // node 内置，web 项目应该没有
            ['^node:', '^node:.*\\u0000$'],
            // mono 包，@foo
            ['^@?\\w', '^@?\\w.*\\u0000$'],
            // 自定义别名的包，@/bar
            ['(?<!\\u0000)$', '(?<=\\u0000)$'],
            // 相对路径
            ['^\\..*\\u0000$', '^\\.'],
            // 样式引入
            ['^.+\\.(s?css|less)$']
          ]
        }
      ]
      // 'simple-import-sort/exports': 'error'
    }
  },
  eslintPluginPrettierRecommended
]
