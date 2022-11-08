import { App } from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html'
import '@kangc/v-md-editor/lib/style/preview-html.css'
// import '@kangc/v-md-editor/lib/theme/style/vuepress'

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
})

//预览

// 引入使用主题的样式

export default (app: App) => {
  app.use(VueMarkdownEditor)
  app.use(VMdPreviewHtml)
}
