// @ts-check
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-multiple-template-root': 0,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-template-curly-in-string': 'off',
      'array-callback-return': 'off',
      'camelcase': 'off',
      'no-console': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'space-before-blocks': ['error', 'always'],
      'space-infix-ops': ['error', { int32Hint: false }],
      '@typescript-eslint/type-annotation-spacing': 'error',
      'vue/html-indent': ['error', 2],
      'vue/keyword-spacing': ['error', { before: true, after: true }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'vue/arrow-spacing': ['error', { before: true, after: true }],
      'vue/array-bracket-spacing': ['error', 'never'],
      'vue/block-spacing': ['error', 'always'],
      'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'vue/space-infix-ops': ['error', { int32Hint: false }],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 5 } }],
      'vue/padding-line-between-blocks': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@stylistic/no-mixed-spaces-and-tabs': 'off',
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/comma-dangle': 'off',
      'comma-dangle': 'off',
      '@stylistic/no-tabs': 'off',
      '@stylistic/max-statements-per-line': 'off'
    }
  }
)
