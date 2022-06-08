import rocket from '../assets/Cartoon_space_rocket.png'
import rocket2 from '../assets/Rocket-PNG-File.png'
import chat from '../assets/messageIcon.png'
import { useState } from 'react'

const Home = ({setCredentials}) => {

    const [username, setUsername] = useState('')

    const handlesignIn = () => {
        setCredentials(username)
        setUsername('')
    }

    return (
        <main id = "login">

            <div class= "intro">
                <h1>Welcome to <span>ChatAway</span></h1>
            </div>  
            <div class= "icons">
                <img src= {rocket} alt= "flying rocket"/>
                <img src= {chat} alt= "chat"/>
                <img src= {chat} alt= "chat"/>
            </div>
            <div class = "actions">
                <h3>Send text messages around the world at lightning speed</h3>

                <p>Get started by entering a choice username below</p>

                <input type= "text" value= {username} onChange= {(e) => setUsername(e.target.value)}/>

                <button onClick= {handlesignIn}>
                    Start
                </button>
            </div>

            

            
        </main>
    )
}

export default Home