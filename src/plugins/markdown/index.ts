import { App } from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import Prism from 'prismjs'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
  Hljs: hljs,
})

export default (app: App) => {
  VueMarkdownEditor.use(vuepressTheme, { Prism })
  // app.use(VueMarkdownEditor)
  // app.use(VMdPreview)
}
