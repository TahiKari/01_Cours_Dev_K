import Name from './Name.jsx'
import { ageState } from './Recoil/atoms.js'
import { useRecoilValue } from 'recoil'
import { presentationSelector } from './Recoil/seletor.js'

export default function User () {
  const userAge = useRecoilValue(ageState)
  const presentation = useRecoilValue(presentationSelector)

  return (
    <div>
      <span>Utilisateur</span>
      <span>Age: {userAge}</span>
      <Name/>
      <spa>{presentation}</spa>
    </div>
  )
}
