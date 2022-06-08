
import './App.css';
import ChatListBar from './components/chatListBar';
import ChatList from './components/chatList';
import ChatArea from './components/chatArea';
import { useState, useEffect } from 'react';
import { user, chats } from './data'

function App() {

  let chatsFromStorage = localStorage.getItem(`chatAway/${user.username}`) === null ? chats : JSON.parse(localStorage.getItem(`chatAway/${user.username}`)).sort((a, b) => a.id - b.id)

  for (let chat of chatsFromStorage) {
    chat.messages.sort((a, b) => {
      console.log("Haha")
      return new Date(a.date) - new Date(b.date)
    })
  }


  const [allContacts, setAllContacts] = useState(chatsFromStorage);
  const [currentChat, setCurrentChat] = useState(chatsFromStorage[0]);


  const setSelectedChat = (id_) => {
    let p = allContacts.filter((t) => t.id === id_);
    console.log(p)
    // p[0].messages.sort((a, b) => {
    //   console.log("Haha")
    //   return new Date(a.date) - new Date(b.date)
    // })
    console.log(p[0])
    localStorage.setItem('testSort', JSON.stringify(p[0].messages))
    setCurrentChat(p[0])
  }


  const sendChat = (p) => {
    let chatId = p.id

    let otherChats = allContacts.filter((t) => t.id !== chatId)
    setAllContacts([...otherChats, p])
    localStorage.setItem(`chatAway/${user.username}`, JSON.stringify([...otherChats, p]))
    console.log('I am a rat')
  }

  useEffect(()=> {
    
    console.log("Big Fish caught")

  }, [currentChat])

  


  return (
    <div className="App">
      <header className="App-header">
        ChatAway
      </header>

      <main>
        <ChatListBar userData= {user}>
          <ChatList chats = {allContacts} sendSelectedChat= {setSelectedChat}/>
        </ChatListBar>
        <ChatArea currentChat_= {currentChat} handleSendMessage= {sendChat}/>
      </main>
    </div>
  );
}

export default App;
