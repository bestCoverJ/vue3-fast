module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  parser: 'vue-eslint-parser',
  plugins: ['prettier', 'vue'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
  },
  overrides: [
    {
      files: ['src/view/index.vue', 'src/view/**/index.vue'], // 匹配views和二级目录中的index.vue
      rules: {
        'vue/multi-word-component-names': 'off',
      }, //给上面匹配的文件指定规则
    },
  ],
}
