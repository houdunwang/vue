import { createRouter, createWebHistory } from 'vue-router'
import guard from './guard'
import admin from './modules/admin'
import auth from './modules/auth'
import editor from './modules/editor'
import errors from './modules/errors'
import home from './modules/home'
import upload from './modules/upload'

export const routes = [admin, auth, editor, errors, home, upload]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

guard(router)

export default router
