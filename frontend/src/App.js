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
            messages: [],
        }
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
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

    handleMessageReceived = msg => {
        this.setState({messages: this.state.messages.concat(msg)});
    }

    render() {
        const visibleLoginForm = !this.state.loggedIn;
        const visibleLogout = this.state.loggedIn;

        return (
            <React.Fragment>
                <CssBaseline/>
                <SockJsClient url='http://localhost:3000/ws' topics={['/topic/public']}
                              onMessage={(msg) => this.handleMessageReceived(msg)}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                <Header onLogout={() => this.handleLogout()} showLogout={visibleLogout}></Header>
                <LoginForm visible={visibleLoginForm}
                           onLogin={() => this.handleLogin()}
                           onChange={() => this.handleChange('userName')}> </LoginForm>
                <Chat visible={!visibleLoginForm} messages={this.state.messages}
                      onChange={() => this.handleChange('messageText')}
                      onSendMessage={() => this.handleMessageSend()}></Chat>
            </React.Fragment>
        );
    }

}

export default App;
