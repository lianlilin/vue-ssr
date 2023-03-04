module.exports = {
    root: true,
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/vue',
        '@ecomfe/eslint-config/typescript',
    ],
    overrides: [],
    // 全局变量哦
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
};