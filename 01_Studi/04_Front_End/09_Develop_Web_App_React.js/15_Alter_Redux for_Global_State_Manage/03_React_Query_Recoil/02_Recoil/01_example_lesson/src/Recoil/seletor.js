import {selector } from 'recoil'
import { nameState, ageState } from './atoms.js'

export const presentationSelector = selector({
  key: 'userPresentationSelector',
  get: ({get}) => {
    const name = get(nameState)
    const age = get (ageState)

    return `Je m'appelle ${name} et j'ai ${age} ans.`
  }
})