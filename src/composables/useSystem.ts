import { getSystem, updateSystem } from '@/apis/system'

export default () => {
  const system = ref<SystemModel>()

  const find = async () => {
    system.value = await getSystem()
  }

  const update = async () => {
    await updateSystem(system.value!)
  }

  return { system, find, update }
}
