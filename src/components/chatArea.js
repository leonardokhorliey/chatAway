import SingleText from "./singleText"
import { useEffect, useState } from 'react';
import avatar from '../assets/avatar.png'


const ChatArea = ({currentChat_, handleSendMessage}) => {

    

    const [textMessage, setTextMessage] = useState('');
    const [currentChat, setCurrentChat] = useState(currentChat_);
    const [messages, setMessages] = useState(currentChat_.messages.sort((a, b) => {
        console.log("Haha")
        return new Date(a.date) - new Date(b.date)
      }));

    const sendMessage = () => {
        let k = messages;
        let timeofSend = new Date().toISOString();
        handleSendMessage({...currentChat_, messages: [
            ...k, {
                id: k.length + 1,
                text: textMessage,
                isUserText: true,
                date: timeofSend
            }
        ]})

        setMessages((prev) => {
            return [
                ...prev, {
                    id: k.length,
                    text: textMessage,
                    isUserText: true,
                    date: timeofSend
                }
            ]
        })

        setTextMessage('')

    }

    useEffect(()=> {
        setCurrentChat(currentChat_)
        setMessages(currentChat_.messages.sort((a, b) => {
            console.log("Haha")
            return new Date(a.date) - new Date(b.date)}))
    }, [currentChat_])

    return (
        <section>
            
            <div className= "current-chat">
                <img src= {avatar} alt= "Profile"/>
                <h1>{currentChat_.contactName}</h1>
            </div>
            <div className= "chat-area">
                <div className= "messages">
                    {messages.map((message, idx) => {
                        return <div key={idx}>
                        <SingleText message= {message.text} isUserText= {message.isUserText} date= {message.date} /></div>
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