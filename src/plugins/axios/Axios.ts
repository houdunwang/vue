import { HttpStatus } from '@/enum/HttpStatus'
import { RouteName } from '@/enum/RouteName'
import router from '@/router'
import errorStore from '@/store/useErrorStore'
import axios, { AxiosRequestConfig } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import { CacheKey } from '@/enum/CacheKey'
import useStorage from '@/composables/hd/useStorage'
interface IOptions {
  loading?: boolean
  message?: boolean
  clearValidateError?: boolean
}
const storage = useStorage()
export default class Axios {
  private instance
  private loading: any
  private options: IOptions = { loading: true, message: true, clearValidateError: true }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T>(config: AxiosRequestConfig, options?: IOptions) {
    this.options = Object.assign(this.options, options ?? {})
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<T>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<T>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (!this.loading && this.options.loading) {
          this.loading = ElLoading.service({ background: 'rgba(255,255,255,0.1)', fullscreen: true })
        }
        if (this.options.clearValidateError) errorStore().resetError()
        config.headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${storage.get(CacheKey.TOKEN_NAME)}`,
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        if (this.loading) {
          this.loading.close()
          this.loading = undefined
        }
        this.options = { loading: true, message: true }

        if (response.data?.message && this.options.message) {
          ElMessage({
            type: response.data?.code ? 'error' : 'success',
            message: response.data.message,
            grouping: true,
            duration: 2000,
          })
          if (response.data?.code) return Promise.reject()
        }
        return response
      },
      (error) => {
        if (this.loading) {
          this.loading.close()
          this.loading = undefined
        }
        this.options = { loading: true, message: true }
        const {
          response: { status, data },
        } = error
        const { message } = data

        switch (status) {
          case HttpStatus.UNAUTHORIZED:
            storage.remove(CacheKey.TOKEN_NAME)
            router.push({ name: RouteName.LOGIN })
            break
          case HttpStatus.UNPROCESSABLE_ENTITY:
            errorStore().setErrors(error.response.data.errors)
            break
          case HttpStatus.FORBIDDEN:
            ElMessage({ type: 'error', message: message ?? '没有操作权限' })
            break
          case HttpStatus.NOT_FOUND:
            ElMessage.error('请求资源不存在')
            break
          case HttpStatus.TOO_MANY_REQUESTS:
            ElMessage({ type: 'error', message: '请求过于频繁，请稍候再试' })
            break
          default:
            if (message) {
              ElMessage({ type: 'error', message: message ?? '服务器错误' })
            }
        }
        return Promise.reject(error)
      },
    )
  }
}
