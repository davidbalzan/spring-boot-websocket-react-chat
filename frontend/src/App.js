import React, {Component} from 'react';
import WrappedLoginForm from './LoginForm.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import Chat from "./Chat";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Header></Header>
                <WrappedLoginForm>
                </WrappedLoginForm>
                <Chat></Chat>
            </React.Fragment>
        );
    }
}

export default App;
