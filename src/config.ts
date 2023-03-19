import appMiddleware from '@/middleware/appMiddleware'
export default {
  router: {
    prefix: '',
  },
  middleware: [appMiddleware],
}
