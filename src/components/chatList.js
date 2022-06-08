import ChatListItem from "./chatListItem"
import avatar from '../assets/avatar.png'

const ChatList = ({chats, sendSelectedChat}) => {

    chats.sort((a, b) => {
        return Math.max(...b.messages.map(o => new Date(o.date))) - Math.max(...a.messages.map(o => new Date(o.date)))
        // b.messages.reduce((acc, ind) => Math.max(new Date(acc.date), new Date(ind.date)), -Infinity) - a.messages.reduce((acc, ind) => Math.max(new Date(acc.date), new Date(ind.date)), -Infinity)
        
    })


    return (
        <div> {
            chats.map((chat, idx)=> {
                chat.messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                return <ChatListItem image = {avatar} contactName= {chat.contactName} lastChat= {chat.messages[0]} chatId = {chat.id} sendSelectedChat = {sendSelectedChat} />
            })}
        </div>
    )
}

export default ChatList