import React, {Component} from 'react';
import LoginForm from './LoginForm.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import Chat from "./Chat";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            messageText: '',
        }
    }

    handleLogin = () => {
        this.setState({loggedIn: true});
    };

    handleLogout = () => {
        this.setState({loggedIn: false});
        //TODO do the actual logout
    }

    handleMessageSend = () => {
        alert('Sending message');
        //TODO actual implementation
    }

    render() {
        const visibleLoginForm = !this.state.loggedIn;
        const visibleLogout = this.state.loggedIn;
        const messageText = this.state.messageText;

        return (
            <React.Fragment>
                <CssBaseline/>
                <Header onLogout={() => this.handleLogout()} showLogout={visibleLogout}></Header>
                <LoginForm visible={visibleLoginForm} onLogin={() => this.handleLogin()}> </LoginForm>
                <Chat visible={!visibleLoginForm} onSendMessage={() => this.handleMessageSend()}
                      messageText={messageText}></Chat>
            </React.Fragment>
        );
    }
}

export default App;
