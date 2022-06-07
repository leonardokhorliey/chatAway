import ChatListItem from "./chatListItem"
import avatar from '../assets/avatar.png'

const ChatList = ({chats, sendSelectedChat}) => {


    return (
        <div> {
            chats.map((chat, idx)=> {
                chat.messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                return <ChatListItem image = {avatar} contactName= {chat.contactName} lastChat= {chat.messages[0]} chatId = {chat.id} sendSelectedChat = {(p)=>sendSelectedChat(p)} />
            })}
        </div>
    )
}

export default ChatList