import {selector } from 'recoil'
import { nameState, ageState, heightState } from './atoms.js'

export const presentationSelector = selector({
  key: 'userPresentationSelector',
  get: ({get}) => {
    const name = get(nameState)
    const age = get (ageState)

    return `Je m'appelle ${name} et j'ai ${age} ans.`
  }
})

export const heightSelector = selector({
  key : 'heightSelector',
  get : ({get})=>{
      const height = get(heightState)

      if( height <= 180){
          return `L’utilisateur n’est pas plus grand que 180cm`
      }
      else{
          return `L’utilisateur est plus grand que 180cm`
      }
  }
})