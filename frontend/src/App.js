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
            messageText: '',
            userName: null,
            messages: [],
            loginFormInvalid: true,
        }
    }

    handleLogin = () => {
        if (this.state.userName) {
            this.setState({loggedIn: true});
            this.clientRef.sendMessage("/app/chat.addUser",
                JSON.stringify({sender: this.state.userName, type: 'JOIN'}));
        } else {
            this.setState({loginFormInvalid: true})
        }
    };

    handleLogout = () => {
        this.setState({
            loggedIn: false,
            messages: []
        });
        this.clientRef.disconnect();
        this.clientRef.connect();
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

    handleChangeUserName = () => event => {
        this.setState({
            userName: event.target.value,
            loginFormInvalid: event.target.value.length < 3,
        });
    }

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
                           loginFornInvalid={this.state.loginFormInvalid}
                           onLogin={() => this.handleLogin()}
                           onChange={() => this.handleChangeUserName()}> </LoginForm>
                <Chat visible={!visibleLoginForm}
                      messages={this.state.messages}
                      messageText={this.state.messageText}
                      onChange={() => this.handleChange('messageText')}
                      onSendMessage={() => this.handleMessageSend()}></Chat>
            </React.Fragment>
        );
    }

}

export default App;
