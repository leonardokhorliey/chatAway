import { useEffect, useState } from 'react'
import avatar from '../assets/avatar.png'

const ChatListBar = (props) => {

    const [searchKey, setSearchKey] = useState('')

    useEffect(()=> {
        props.handleSearch(searchKey)
    }, [searchKey])

    return (
        <aside>
            <div className= "intro-page">
                <img src= {avatar}/>
                <h3>Welcome<br/><span>{props.username}</span></h3>
            </div>
            <div>
                <input type= "text" placeholder= 'Search for a Contact' value= {searchKey} onChange= {(e) => setSearchKey(e.target.value)} />
            </div>

            {props.children}

        </aside>
    )
}


export default ChatListBar