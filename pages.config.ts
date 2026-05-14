import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    // 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
    custom: {
      '^wd-(.*)': '@wot-ui/ui/components/wd-$1/wd-$1.vue',
      "^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)": "z-paging/components/z-paging$1/z-paging$1.vue"
    },
  },
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  globalStyle: {
    'navigationBarBackgroundColor': '#fff',
    'backgroundColor': '#fff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': 'unisave',
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
  tabBar: {
    custom: true,
    // #ifdef MP-ALIPAY
    customize: true,
    // 暂时不生效。4.71.2025061206-alpha已修复：https://uniapp.dcloud.net.cn/release-note-alpha.html#_4-71-2025061206-alpha，我们等正式版发布后更新。
    overlay: true,
    // #endif
    height: '0',

    list: [{
      pagePath: 'pages/index/index',
    }, {
      pagePath: 'pages/test/test',
    }],
  },
})
