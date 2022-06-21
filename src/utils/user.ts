import { ElMessage } from 'element-plus'
import { CacheEnum } from '@/enum/CacheEnum'
import store from './store'
import router from '@/router'
import userStore from '@/store/userStore'

// export async function login(values: Record<string, any>) {
//   const { data } = await apiLogin(values)
//   loginAndRegisterCallback(data)
// }

// export async function register(values: IRegisterForm) {
//   const { data } = await apiRegister(values)

//   loginAndRegisterCallback(data)
// }

// export async function forgetPassword(values: IForgetPassword) {
//   const { data } = await apiForgetPassword(values)

//   loginAndRegisterCallback(data)
// }

/**
 * 登录与注册回调
 * @param data
 */
// function loginAndRegisterCallback(data: ILoginAndRegisterResponse) {
//   store.set(CacheEnum.TOKEN_NAME, data.token)

//   userStore().getUserInfo()

//   const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'

//   router.push({ name: routeName })

//   ElMessage({ type: 'success', message: '登录成功' })
// }

// export async function logout() {
//   userStore().resetInfo()

//   store.remove(CacheEnum.TOKEN_NAME)
//   router.push({ name: 'home' })
// }
