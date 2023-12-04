module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      files: ['src/view/index.vue', 'src/view/**/index.vue', 'src/*'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'no-unused-vars': 'warn'
      }, //给上面匹配的文件指定规则
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
  },
}
