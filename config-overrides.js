const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')
function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}
console.log('请稍等')
console.log(resolve('assets'))
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@as': resolve('assets'),
        '@c': resolve('components'),
        '@common': resolve('components/common'),
        '@hoc': resolve('components/hoc'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
        "@store": resolve('store'),
        "@util": resolve('util'),
        // "@connect": resolve('connect'),
    }
    return config;
};