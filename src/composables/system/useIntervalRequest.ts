import dayjs from 'dayjs'
import { ref } from 'vue'
import useStorage from './useStorage'
const key = 'interval_exec_time'
const storage = useStorage()

export default (timeout: number, fn: () => void) => {
  const time = ref<number>(0)
  let intervalId: NodeJS.Timer | undefined
  setTimer()
  function handle() {
    setTimer()
    if (storage.get(key)) return
    storage.set(key, dayjs(), timeout)
    fn()
  }

  function setTimer() {
    if (intervalId) return

    intervalId = setInterval(() => {
      const cache = dayjs(storage.get(key)).add(timeout, 'second')
      time.value = cache.diff(dayjs(), 'second')
      if (time.value == 0) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    }, 1000)
  }

  return { time, handle }
}
