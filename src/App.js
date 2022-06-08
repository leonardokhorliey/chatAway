
import './App.css';
import ChatListBar from './components/chatListBar';
import ChatList from './components/chatList';
import ChatArea from './components/chatArea';
import Home from './components/home';
import { useState, useEffect } from 'react';
import { user, chats } from './data';


function App() {

  let chatsFromStorage = localStorage.getItem(`chatAway/${user.username}`) === null ? chats : JSON.parse(localStorage.getItem(`chatAway/${user.username}`)).sort((a, b) => a.id - b.id)

  for (let chat of chatsFromStorage) {
    chat.messages.sort((a, b) => {
      console.log("Haha")
      return new Date(a.date) - new Date(b.date)
    })
  }


  const [userAccount, setUserAccount] = useState(user.username);
  const [allContacts, setAllContacts] = useState(chatsFromStorage);
  const [currentChat, setCurrentChat] = useState(chatsFromStorage[0]);
  const [loggedIn, setLoggedIn] = useState(false)


  const setSelectedChat = (id_) => {
    let p = allContacts.filter((t) => t.id === id_);
    console.log(p)
    setCurrentChat(p[0])
  }


  const sendChat = (p) => {
    let chatId = p.id

    let otherChats = allContacts.filter((t) => t.id !== chatId)
    setAllContacts([...otherChats, p])
    localStorage.setItem(`chatAway/${userAccount}`, JSON.stringify([...otherChats, p]))
    console.log('I am a rat')
  }

  const handleLogIn = (p) => {
    setUserAccount(p)
    let chatsAvailable = localStorage.getItem(`chatAway/${p}`) === null ? chats : JSON.parse(localStorage.getItem(`chatAway/${user.username}`)).sort((a, b) => a.id - b.id)
    setAllContacts(chatsAvailable)
    setCurrentChat(chatsAvailable[0])
    console.log('Logged In')
    localStorage.setItem(`chatAway`, p)
    setLoggedIn(true)
  }

  const handleLogOut = () => {
    setLoggedIn(false)
    setUserAccount('')
  }

  const searchChats = (phrase) => {
    if (localStorage.getItem(`chatAway/${userAccount}`) === null) {
      setAllContacts(chats.filter((t) => t.contactName.toLowerCase().includes(phrase.toLowerCase())));
      return;
    }
    setAllContacts(JSON.parse(localStorage.getItem(`chatAway/${userAccount}`)).filter((t) => t.contactName.toLowerCase().includes(phrase.toLowerCase()))
    )
  }

  useEffect(()=> {
    let availableUser = localStorage.getItem(`chatAway`)

    if (availableUser !== null) {
      setUserAccount(availableUser)

      let chatsAvailable = localStorage.getItem(`chatAway/${availableUser}`) === null ? chats : JSON.parse(localStorage.getItem(`chatAway/${user.username}`)).sort((a, b) => a.id - b.id)
      setAllContacts(chatsAvailable)
      setCurrentChat(chatsAvailable[0])

      setLoggedIn(true)
      
    }
    

  }, [])

  


  return (
    <div className="App">
      {!loggedIn && <Home setCredentials= {handleLogIn}/>}
      {loggedIn && <>
        <header className="App-header">
        <p></p>
        ChatAway
        <button id= "log-out" onClick= {handleLogOut}>
          Sign Out
        </button>
      </header>

      <main>
        <ChatListBar username= {userAccount} handleSearch= {searchChats}>
          <ChatList chats = {allContacts} sendSelectedChat= {setSelectedChat}/>
        </ChatListBar>
        <ChatArea currentChat_= {currentChat} handleSendMessage= {sendChat}/>
      </main></>}
    </div>
  );
}

export default App;
