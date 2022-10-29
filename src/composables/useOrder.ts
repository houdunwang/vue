import { http } from '@/plugins/axios'

export default () => {
  const order = ref<OrderModel>()
  const wepayQr = ref('')
  const createOrder = async (type: string) => {
    order.value = await http
      .request<ApiData<OrderModel>>({
        url: `${type}/create_order`,
        method: 'POST',
      })
      .then((r) => r.data)
  }

  const wepay = async () => {
    await createOrder('wepay')
    wepayQr.value = await http.request<string>({
      url: `wepay/pay/${order.value?.sn}`,
    })
  }

  return { order, createOrder, wepay, wepayQr }
}
