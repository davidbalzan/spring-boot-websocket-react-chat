import React, {Component} from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ChatIcon from '@material-ui/icons/Chat';

class Chat extends Component {
    render() {
        return (
            <List>
                <ListItem>
                    <Avatar><ChatIcon/></Avatar>
                    <ListItemText>David logged in</ListItemText>
                </ListItem>
                <ListItem>
                    <Avatar>D</Avatar>
                    <ListItemText>Test text</ListItemText>
                </ListItem>
                <ListItem>
                    <Avatar><ChatIcon/></Avatar>
                    <ListItemText>John logged in</ListItemText>
                </ListItem>
                <ListItem>
                    <Avatar>J</Avatar>
                    <ListItemText>Test text 2</ListItemText>
                </ListItem>
            </List>
        );
    }
}

export default Chat;