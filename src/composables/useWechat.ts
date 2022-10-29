import { http } from '@/plugins/axios'

export default () => {
  const ticket = ref('')

  //获取微信二维码ticket
  const getTicket = async () => {
    const { data } = await http.request<{ data: { ticket: string } }>({
      url: `wechat/qr`,
    })
    ticket.value = data.ticket
  }

  return { getTicket, ticket }
}
