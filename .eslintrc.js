module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
    // 'vue/setup-compiler-macros': true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    // 'prettier/prettier': 'error',
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'] // 关闭类型推断
  }
}
