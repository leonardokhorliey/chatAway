import SingleText from "./singleText"
import { useState } from 'react';
import avatar from '../assets/avatar.png'


const ChatArea = ({currentChat_, handleSendMessage}) => {

    const [textMessage, setTextMessage] = useState('');
    const [currentChat, setCurrentChat] = useState(currentChat_);

    const sendMessage = () => {
        let k = currentChat.messages;
        let timeofSend = new Date().toString();
        handleSendMessage({...currentChat, messages: [
            ...k, {
                id: k.length,
                text: textMessage,
                isUserText: true,
                date: timeofSend
            }
        ]})

        setCurrentChat((prev) => {
            return {...prev, messages: [
                ...k, {
                    id: k.length,
                    text: textMessage,
                    isUserText: true,
                    date: timeofSend
                }
            ]}
        })

        setTextMessage('')

    }

    return (
        <section>
            
            <div className= "current-chat">
                <img src= {avatar} alt= "Profile"/>
                <h1>{currentChat.contactName}</h1>
            </div>
            <div className= "chat-area">
                <div className= "messages">
                    {currentChat.messages.map((message, idx) => {
                        return <SingleText message= {message.text} isUserText= {message.isUserText} date= {message.date} />
                    })}
                </div>
            </div>
            <div className="chat-input">
                <input type= "text" placeholder= "Enter Message" value= {textMessage} onChange= {(e)=> setTextMessage(e.target.value)}/>
                <button onClick= {sendMessage}>
                    Send
                </button>
            </div>
        </section>
    )
}

export default ChatArea