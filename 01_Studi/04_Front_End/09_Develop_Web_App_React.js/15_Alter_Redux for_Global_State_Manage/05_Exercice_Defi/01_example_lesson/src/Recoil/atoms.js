import { atom } from 'recoil'

export const nameState = atom({
  key: 'userName',
  default: 'John'
})

export const ageState = atom({
  key: 'userAge',
  default: '26'
})

export const heightState = atom({
  key: 'userHeight',
  default: '180'
})
