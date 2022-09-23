import dayjs from 'dayjs'
import { Ref, ref } from 'vue'
import useStorage from './useStorage'
const key = 'interval_exec_time'
const storage = useStorage()

export default (timeout: number, fn: (check: () => boolean, time: Ref<number>) => void) => {
  const time = ref<number>(0)
  let intervalId: NodeJS.Timer | undefined
  setTimer()
  //检测是否可执行
  function check() {
    setTimer()
    if (storage.get(key)) return false
    storage.set(key, dayjs(), timeout)
    return true
  }

  //执行函数
  function exec() {
    fn(check, time)
  }

  //定时器处理
  function setTimer() {
    if (intervalId) return

    intervalId = setInterval(() => {
      const cache = dayjs(storage.get(key)).add(timeout, 'second')
      time.value = cache.diff(dayjs(), 'second')
      if (time.value == 0) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    }, 100)
  }

  return { time, check, exec }
}
