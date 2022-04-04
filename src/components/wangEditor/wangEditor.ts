import wangEditor from 'wangeditor'

export default class {
  editor: wangEditor
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el)
    // this.editor.config.height = config.height
    // this.editor.config.uploadImgServer = '/upload-img'
    Object.assign(this.editor.config, config)

    this.editor.config.onchange = callback
    this.editor.config.uploadImgHooks = this.uploadImage()
    this.editor.create()

    this.editor.txt.html(config.modelValue)
  }

  uploadImage() {
    return {
      customInsert: function (insertImgFn: Function, result: any) {
        // console.log(result)
        insertImgFn(result.result.url)
      },
    }
  }
}
