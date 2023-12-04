import { nameState } from "./Recoil/atoms.js";
import { useRecoilState } from "recoil";

export default function Name() {
  const [name, setName] = useRecoilState(nameState)

  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <span>{name}</span>
      <input type='text' onChange={handleChange}/>
    </>
  )
}