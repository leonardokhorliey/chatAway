import { FiSend } from 'react-icons/fi';
import { AiTwotoneMessage } from 'react-icons/ai'

const ChatListItem = ({image, contactName, lastChat, chatId, sendSelectedChat}) => {


    const handleSelectChat = () => {
        sendSelectedChat(chatId)
        console.log(chatId)
    }


    return (
        <button className= "chatitem" onClick= {handleSelectChat}>
            <div>
                <img src={image} alt=""/>
            </div>
            <div className= "contact-name">
                <h2>{contactName}</h2>
                <div>
                    {lastChat.isUserText ? <FiSend/> : <AiTwotoneMessage/>}
                    <p>{lastChat.text.length > 30 ? lastChat.text.substring(0, 30) + "..." : lastChat.text}</p>
                </div>
                
            </div>
        </button>
    )
}

export default ChatListItem