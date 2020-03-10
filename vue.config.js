const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
    publicPath: './',
    configureWebpack: {
      plugins: [
        new SentryWebpackPlugin({
            release: '', //每次发布修改的，设置sentry的release版本
            dryRun: !process.env.VUE_APP_Sentry_SourceMap,  // 在测试、开发环境为true，空运行。 当发布时候为false。
            include: '.',
            ignoreFile: '.sentrycliignore', //没有加这个，直接用了下面的配置项
            ignore: ['node_modules', 'vue.config.js','babel.config.js', 'src'],
            configFile: './.sentryclirc' //配置文件
          })
      ]
    }
  }