import Name from './Name.jsx'
import { ageState, heightState } from './Recoil/atoms.js'
import { useRecoilValue, useRecoilState } from 'recoil'
import { heightSelector, presentationSelector } from './Recoil/seletor.js'

export default function User () {
  const userAge = useRecoilValue(ageState)
  const [userHeight, setUserHeight] = useRecoilState(heightState)
  const presentation = useRecoilValue(presentationSelector)
  const heightCondition = useRecoilValue(heightSelector)
  const handleHeightChange = e => {
    setUserHeight(e.target.value)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black'
      }}
    >
      <span>Utilisateur</span>
      <span>Age: {userAge}</span>
      <Name />
      <spa>{presentation}</spa>

      <span>Taille : {userHeight}cm</span>
      <input type='number' onChange={handleHeightChange} />
      <span>{heightCondition}</span>
    </div>
  )
}
