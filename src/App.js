import {ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import  ChatFeed from './components/ChatFeed';
import './App.css';


const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height = "100vh"
            projectID="4ececd24-d15d-480f-9e02-93a42e2d9447"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;