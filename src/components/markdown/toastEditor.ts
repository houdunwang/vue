import { uploadImage } from '@/apis/uploadApi'
import Editor from '@toast-ui/editor'
export default class {
  editor: Editor
  isFullscreen: boolean = false
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new Editor({
      el: document.querySelector(el)!,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: height,
      initialValue: initialValue,
      toolbarItems: this.toolbar() as [],
    })
    this.ImageHook()
  }

  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          command: 'fullscreen',
          tooltip: 'fullscreen',
        },
      ],
    ]
  }

  private fullscreen() {
    const button = document.createElement('button') as HTMLButtonElement
    button.innerHTML = '全屏'
    button.style.margin = '0'

    button.addEventListener('click', () => {
      this.toggleFullscreen()
    })

    document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key == 'Escape' && this.isFullscreen) {
        this.toggleFullscreen()
      }
    })

    return button
  }

  private toggleFullscreen() {
    const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
    ui.classList.toggle('fullscreen')
    this.isFullscreen = !this.isFullscreen

    if (this.isFullscreen === false) {
      this.editor.setHeight(this.height)
    } else {
      this.editor.setHeight('100vh')
    }
  }

  private ImageHook() {
    this.editor.removeHook('addImageBlobHook')

    this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
      const form = new FormData()
      form.append('file', blob, blob.name)

      const response = await uploadImage(form)

      callback(response.result.url, blob.name)
    })
  }
}
