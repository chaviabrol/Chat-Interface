import {useState} from 'react';
import axios from 'axios';
const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError ] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const authObject = {'Project-ID':"4ececd24-d15d-480f-9e02-93a42e2d9447", 'User-Name' : username, 'User-Secret': password }
        try { 
            await axios.get('https://api.chatengine.io/chats', {headers : authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError("Oops! incorrect credentials.")
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'> Chat Interface</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        className='input'
                        placeholder='Username' 
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className='input'
                        placeholder='Password' 
                        required
                    />
                    <div align ="center">
                        <button type="submit" className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                    <p className='info'>To Login :  <br/>
                        Username: archieee<br/>
                        Password: 123123<br/>
                        OR<br/>
                        Username: samuel123 (admin)<br/>
                        Password: 123123<br/>

                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;