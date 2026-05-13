/// <reference types='@dcloudio/types' />
import 'vue'

// definePage 是 @uni-helper/vite-plugin-uni-pages 提供的编译器宏
declare global {
  function definePage(options: {
    style?: {
      navigationBarTitleText?: string
      navigationBarBackgroundColor?: string
      navigationBarTextStyle?: string
      backgroundColor?: string
      backgroundTextStyle?: string
      enablePullDownRefresh?: boolean
      onReachBottomDistance?: number
      disableScroll?: boolean
      pageOrientation?: 'auto' | 'portrait' | 'landscape'
      animationType?: string
      animationDuration?: number
      enableShareAppMessage?: boolean
      enableShareTimeline?: boolean
      enablePageMeta?: boolean
      [key: string]: unknown
    }
    [key: string]: unknown
  }): void
}

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance

  interface ComponentCustomOptions extends Hooks {

  }
}

export {}
