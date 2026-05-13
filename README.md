# uniapp-mini-template

基于 UniApp、Vue 3、TypeScript 的开箱即用小程序开发模板。

<p align="center">
  <a href="https://uniapp.dcloud.net.cn/">UniApp</a> |
  <a href="https://vuejs.org/">Vue 3</a> |
  <a href="https://www.typescriptlang.org/">TypeScript</a> |
  <a href="https://pinia.vuejs.org/">Pinia</a> |
  <a href="https://unocss.dev/">UnoCSS</a>
</p>

## 平台支持

| H5 | iOS | Android | 微信小程序 | 支付宝小程序 | 字节小程序 | 快手小程序 | 百度小程序 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| √ | √ | √ | √ | √ | √ | √ | √ |

## 特性

- 🏎️ **Vue 3 + Composition API** - 基于 `<script setup>` 语法，现代化开发体验
- 📦 **组件自动导入** - 告别繁琐的 import 语句
- 🔌 **API 自动导入** - 直接使用 Composition API 函数
- 🍍 **状态管理** - Pinia 搭配持久化插件，数据持久化无忧
- 🎨 **UnoCSS** - 原子化 CSS，快速构建精美界面
- 🧩 **Wot Design Uni** - 精心设计的跨端 UI 组件库
- 🔀 **路由封装** - 封装常用路由操作，开箱即用
- 🌐 **请求封装** - 基于 Promise 的 HTTP 客户端，拦截器统一处理
- 📱 **分包加载** - 支持小程序分包，优化首屏加载速度
- 📝 **TypeScript** - 完整的类型支持，类型安全
- 🎯 ** ESLint + Prettier** - 统一代码风格

## 技术栈

### 核心框架
- [UniApp](https://uniapp.dcloud.net.cn/) - 跨平台应用开发框架
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 超集

### 状态管理
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理
- [pinia-plugin-persist-uni](https://github.com/Allen-1998/pinia-plugin-persist-uni) - Pinia 数据持久化

### UI 组件
- [Wot Design Uni](https://wot-design-uni.guangzhouyundiwangluokejiyouxiangongsi.github.io/) - 跨端 UI 组件库

### 样式方案
- [UnoCSS](https://unocss.dev/) - 原子化 CSS 引擎
- [@wot-ui/unocss-preset](https://github.com/MJYP-dev/wot-ui-unocss-preset) - Wot Design UnoCSS 预设

### 开发工具
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Vitest](https://vitest.dev/) - Vite 原生单元测试框架

### 插件生态
- [@uni-helper/vite-plugin-uni-pages](https://github.com/uni-helper/vite-plugin-uni-pages) - 文件路由系统
- [@uni-helper/vite-plugin-uni-manifest](https://github.com/uni-helper/vite-plugin-uni-manifest) - TypeScript 编写 manifest.json
- [@uni-helper/vite-plugin-uni-layouts](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统
- [@uni-helper/uni-network](https://github.com/uni-helper/uni-network) - HTTP 请求客户端
- [@uni-helper/uni-use](https://github.com/uni-helper/uni-use) - 路由操作封装


## 项目结构

```
src/
├── components/          # 全局组件目录
├── composables/          # 组合式函数
├── constants/            # 常量定义
├── layouts/              # 布局组件
│   └── tabbar.vue        # Tabbar 布局
├── pages/                # 页面目录（自动生成路由）
│   ├── index/
│   └── test/
├── pages-sub/            # 分包页面目录
├── router/               # 路由配置
├── services/             # 服务层
│   ├── apis/             # API 接口定义
│   └── request/           # 请求封装
├── static/               # 静态资源
├── stores/               # Pinia 状态管理
│   └── modules/          # Store 模块
├── typings/              # 类型定义
├── utils/                # 工具函数
├── App.vue               # 应用入口
├── main.ts               # 主入口文件
├── manifest.json         # 应用配置（自动生成）
└── pages.json            # 页面配置（自动生成）
```

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```sh
pnpm install
```

### 开发命令

```sh
# H5 开发
pnpm dev:h5

# 微信小程序
pnpm dev:mp-weixin

# 支付宝小程序
pnpm dev:mp-alipay

# App（Android）
pnpm dev:app-android

# App（iOS）
pnpm dev:app-ios
```

### 构建命令

```sh
# 构建 H5
pnpm build:h5

# 构建微信小程序
pnpm build:mp-weixin

# 构建 App
pnpm build:app
```

## 常用配置

### 页面配置

在 `pages.config.ts` 中配置页面信息和全局样式：

```ts
export default defineUniPages({
  pages: [],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '应用名称',
  },
})
```

### 应用配置

在 `manifest.config.ts` 中配置应用信息：

```ts
export default defineManifestConfig({
  'name': '应用名称',
  'appid': '应用AppID',
  'description': '应用描述',
  'versionName': '1.0.0',
  'versionCode': '100',
})
```

### 环境变量

创建 `.env.development` 和 `.env.production` 文件：

```env
VITE_BASE_API=/api
VITE_HTTP_URL=https://api.example.com
```

## 代码规范

### TypeScript 类型检查

```sh
pnpm type-check
```

### ESLint 检查

```sh
pnpm lint
```

### ESLint 自动修复

```sh
pnpm lint:fix
```

## License

[MIT](./LICENSE)
