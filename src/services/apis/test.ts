import { instance } from '../request'

export function getTestData() {
  return instance.get<{ id: number }>('/test')
}
