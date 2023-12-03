import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "./redux/userSlice.js"

export default function User(){

    const userName = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.elements.userName.value)
       dispatch(setUserName(e.target.elements.userName.value))
    }
    
    return(
        <div>
            <span>{userName}</span>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName"/>
                <button type="submit">Soumettre</button>    
            </form>
            
        </div>
    )
}