import auth from './auth'
import front from './front'
import admin from './admin'
import error from './error'
import member from './member'
import config from '@/config'

const routes = [...admin, front, auth, error, member]

//添加路由前缀
routes.forEach((route) => {
  route.path = config.router.prefix + route.path
})

export default routes
