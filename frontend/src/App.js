import React, {Component} from 'react';
import LoginForm from './LoginForm.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import Chat from "./Chat";
import SockJsClient from 'react-stomp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            messageText: null,
            userName: null,
        }
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
        alert('User: ' + this.state.userName);
        if (this.state.userName) {
            this.clientRef.sendMessage("/app/chat.addUser",
                JSON.stringify({sender: this.state.userName, type: 'JOIN'}));
        }
    };

    handleLogout = () => {
        this.setState({loggedIn: false});
        //TODO do the actual logout
    }

    handleMessageSend = () => {
        alert('Sending message ' + this.state.messageText);
        if (this.state.userName) {
            this.clientRef.sendMessage("/app/chat.sendMessage",
                JSON.stringify({sender: this.state.userName, content: this.state.messageText, type: 'CHAT'}));
            this.setState({messageText: ''})
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const visibleLoginForm = !this.state.loggedIn;
        const visibleLogout = this.state.loggedIn;

        return (
            <React.Fragment>
                <CssBaseline/>
                <SockJsClient url='http://localhost:3000/ws' topics={['/topic/public']}
                              onMessage={(msg) => {
                                  console.log(msg);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                <Header onLogout={() => this.handleLogout()} showLogout={visibleLogout}></Header>
                <LoginForm visible={visibleLoginForm}
                           onLogin={() => this.handleLogin()}
                           onChange={() => this.handleChange('userName')}> </LoginForm>
                <Chat visible={!visibleLoginForm}
                      onChange={() => this.handleChange('messageText')}
                      onSendMessage={() => this.handleMessageSend()}></Chat>
            </React.Fragment>
        );
    }
}

export default App;
