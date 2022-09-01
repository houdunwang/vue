import { CacheEnum } from '@/enum/CacheEnum'
import { HttpEnum } from '@/enum/httpEnum'
import { RouteEnum } from '@/enum/RouteEnum'
import router from '@/router/register'
import errorStore from '@/store/errorStore'
import store from '@/utils/store'
import axios, { AxiosRequestConfig } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

export default class Axios {
  private instance
  private loading: any
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        this.loading =
          this.loading ??
          ElLoading.service({
            background: 'rgba(255,255,255,0.1)',
          })
        errorStore().resetError()
        config.headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${store.get(CacheEnum.TOKEN_NAME)}`,
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
        this.loading.close()
        if (response.data?.message) {
          ElMessage({
            type: 'success',
            message: response.data.message,
            grouping: true,
            duration: 2000,
          })
        }
        return response
      },
      (error) => {
        this.loading.close()
        const {
          response: { status, data },
        } = error
        const { message } = data

        switch (status) {
          case HttpEnum.UNAUTHORIZED:
            store.remove(CacheEnum.TOKEN_NAME)
            router.push({ name: RouteEnum.LOGIN })
            break
          case HttpEnum.BAD_REQUEST:
            errorStore().setErrors(error.response.data.errors)
            break
          case HttpEnum.FORBIDDEN:
            ElMessage({ type: 'error', message: message ?? '没有操作权限' })
            break
          case HttpEnum.NOT_FOUND:
            router.push({ name: RouteEnum.NOT_FOUND })
            break
          case HttpEnum.TOO_MANY_REQUESTS:
            ElMessage({ type: 'error', message: message ?? '请示过于频繁，请稍候再试' })
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
