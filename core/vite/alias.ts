import path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../../src'),
  '#': path.resolve(__dirname, '../../types'),
  '@@': path.resolve(__dirname, '../'),
  '##': path.resolve(__dirname, '../types'),
} as AliasOptions

export default alias
