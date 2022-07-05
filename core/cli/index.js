#!/usr/bin/env node

/**
 * houdunren-vue
 * 后盾人前端脚手架
 * @author 向军大叔 <https://www.houdurnen.com>
 */
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'
import { download } from 'obtain-git-repo'
import { createSpinner } from 'nanospinner'
import figlet from 'figlet'
import terminalLink from 'terminal-link'

figlet('houdunren.com', async function (err, data) {
  //打印文字图案
  console.log(data)
  //可点击链接
  const douyin = terminalLink('抖音', 'https://www.houdunren.com')
  const bilibli = terminalLink('bilibli', 'https://www.houdunren.com')
  console.log(chalk.green(`欢迎使用后盾人前端脚手架，向军大叔每晚8点在${douyin}与${bilibli}直播`))

  //询问用户
  const message = await inquirer.prompt({
    name: 'dirname',
    type: 'input',
    message: '请输入目录名',
    default() {
      return 'houdunren-vue'
    },
  })

  //目录是否已经存在
  const dirIsExists = fs.existsSync(message.dirname)

  if (dirIsExists) {
    console.log(chalk.redBright('目录已经存在'))
  } else {
    //显示下载动画
    const spinner = createSpinner('开始下载...').start()
    //下载git代码
    download('direct:https://gitee.com/houdunren/vue', message.dirname, { clone: true }, function (err) {
      if (err) {
        spinner.error({ text: '下载失败' })
      } else {
        spinner.success({
          text: '项目创建成功，请依次执行以下命令',
        })
        console.log(chalk.white(`cd ${message.dirname}`))
        console.log(chalk.white('npm install'))
        console.log(chalk.white('npm run dev'))
        return
      }
    })
  }
})
