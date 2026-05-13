import fs from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
// prettier 插件，用于排序 import 语句，不需要可移除
import * as prettierPluginSortImports from '@ianvs/prettier-plugin-sort-imports'
import * as prettier from 'prettier'

// 将 path 转换为帕斯卡命名，如 pages/auth/agreement/privacy-page -> PagesAuthAgreementPrivacyPage
function pathToPascalCase(path) {
  return path
    .split('/')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export async function writePageConst(ctx) {
  const pageConstEntries = []
  ;[...ctx.pageMetaData, ...ctx.subPageMetaData].forEach((page) => {
    // 使用标题作为注释
    const comment = `/** ${page.style?.navigationBarTitleText || ''} */`
    // name 存在时使用 name，否则从 path 转换生成
    const constName = page.name || pathToPascalCase(page.path)
    pageConstEntries.push(`${comment}\n"${constName}": "/${page.path}",\n`)
  })
  // 如果你是 ts 项目，可以对照参考改为 enum 或者其他形式
  const fileContent = `
  /*******************************
   * 此文件由脚本自动生成，请勿手动修改 *
   *******************************/

  /**
   * 页面路径常量
   */
  export const PageUrlConst = {\n${pageConstEntries.join('\n')}\n}
  `
  const filepath = fileURLToPath(new URL('../src/constants/pageConst.ts', import.meta.url))
  try {
    // 如果你不需要 prettier 美化代码，可以跳过该步骤，直接写入文件
    const prettierConfig = await prettier.resolveConfig(filepath)
    const formattedContent = await prettier.format(fileContent, {
      ...prettierConfig,
      filepath,
      plugins: [prettierPluginSortImports],
    })
    fs.writeFileSync(filepath, formattedContent, {
      encoding: 'utf-8',
    })
    console.log(`✅ 页面路径常量文件已成功生成：${filepath}`)
  }
  catch (error) {
    console.error(`❌ 生成页面路径常量文件失败：${error.message}`)
    console.error('错误详情：', error)
  }
}

export function handlePageName(ctx, inKey) {
  if (!(inKey in ctx))
    return
  ctx[inKey].forEach((page) => {
    // 配置优先级高于自动生成
    if (page.name)
      return
    // 将路径中的 /.- 替换为下划线，并转换为大写，作为路由名称
    // 例如：路径 pages/home/index.page.vue 会生成路由名称 PAGES_HOME_INDEX_PAGE
    // 你可以根据需要修改生成规则，建议通过 path 转化而成，大多数情况下能保持全局唯一，而且容易从 name 猜测页面所在
    page.name = page.path.replace(/[/.-]/g, '_').toUpperCase()
  })
}
