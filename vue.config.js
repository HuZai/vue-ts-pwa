const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/seo/'
      : '/',
  outputDir:'dist/seo',
  pwa: {
    name: 'My App1',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   runtimeCaching: [
    //     // {
    //     //   urlPattern: /leaf/,
    //     //   handler: 'networkFirst',
    //     //   options: {
    //     //     networkTimeoutSeconds: 10,
    //     //     cacheName: 'my-api-cache',
    //     //     expiration: {
    //     //       maxEntries: 5,
    //     //       maxAgeSeconds: 30 // 30 days
    //     //     },
    //     //     cacheableResponse: {
    //     //       statuses: [200]
    //     //     }
    //     //   }
    //     // },
    //     {
    //       urlPattern: /.*\.(?:js|css)/,
    //       handler: 'networkFirst',
    //       options: {
    //         cacheName: 'my-js-cache',
    //         expiration: {
    //           maxEntries: 30,
    //           maxAgeSeconds: 30
    //         },
    //         cacheableResponse: {
    //           statuses: [0, 200]
    //         }
    //       }
    //     }
    //   ]
    // }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      //seo 搜索 配置
      // config.plugin('PrerenderSPAPlugin').use(PrerenderSPAPlugin, [
      //   {
      //     // seo 优化 首屏生成
      //     // 生成文件的路径，也可以与webpakc打包的一致。
      //     // 下面这句话非常重要！！！
      //     // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
      //     staticDir: path.join(__dirname, 'dist'),
      //     outputDir: path.join(__dirname, 'dist/seo'),
      //     indexPath: path.join(__dirname, 'dist', '/seo/index.html'),
      //     // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
      //     routes: ['/','/about'],
      //     // 这个很重要，如果没有配置这段，也不会进行预编译
      //     renderer: new Renderer({
      //       inject: {
      //         foo: 'bar'
      //       },
      //       renderAfterTime: 5000,// renderAfterTime与 renderAfterDocumentEvent  同时起作用 哪个快执行哪个
      //       headless: false,
      //       // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
      //       // renderAfterDocumentEvent: 'render-event'
      //     })
      //   }
      // ])
      // config.plugin('html').tap(opts => {
      //   opts[0].minify = { removeComments: false }
      //   return opts
      // })
    } else {
      config.plugin('SkeletonPlugin').use(SkeletonPlugin, [
        {
          pathname: path.resolve(__dirname, `./shell`), // 用来存储 shell 文件的地址
          staticDir: path.resolve(__dirname, './dist/seo'), // 最好和 `output.path` 相同
          routes: ['/', '/about'] // 将需要生成骨架屏的路由添加到数组中
        }
      ])
    }
    config.plugin('SkeletonWebpackPlugin').use(SkeletonWebpackPlugin,[
      {
        webpackConfig: {
          entry:{
            app: path.resolve(__dirname,'./src/entry-skeleton.js')
          }
        },
        quiet: true,
        minimize: true,
        router: {
          mode: 'history',
          routes: [
            {
              path: '/seo',
              skeletonId: 'skeletonIndex'
            },
            {
              path: '/seo/about',
              skeletonId: 'skeletonAbout'
            },
          ]
        }
      }
    ])

  },
  devServer: {
    proxy: {
      '/leaf': {
        target: 'http://testwapi.95vintage.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
