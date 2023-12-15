import { useState } from "react"

const users = [
    'Arthur',
    'Julien',
    'Elodie',
    'Lola'
]

export const nameLength = () => {
    return users.filter(name => name.length > 5)
}

export default function Users(){

    const [listHide, setListHide] = useState(false)   

    nameLength()

    return(
        <>
            {listHide && <ul>
                    {users.map((name,i)=>{
                        return <li key={i}>
                            {name}
                        </li>
                    })}    
                </ul>
            }       

            <button onClick={()=> setListHide(!listHide)}>Afficher Liste</button>
        </>
    )
}