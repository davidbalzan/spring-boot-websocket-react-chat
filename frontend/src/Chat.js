import React, {Component} from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ChatIcon from '@material-ui/icons/Chat';
import Grid from "@material-ui/core/es/Grid/Grid";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Fade from "@material-ui/core/es/Fade/Fade";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 400,
        paddingTop: theme.spacing.unit * 10,
    },
    bottom: {
        position: 'fixed',
        bottom: 2,
        width: '100%',
        margin: 10,
    },
    chatArea: {
        maxHeight: '600px',
        overflow: 'auto',
        position: 'sticky',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column-reverse'
    }
});

class Chat extends Component {

    formatMessage = msg => {
        if (msg.type === 'JOIN') {
            return (
                <ListItem key={msg.timeStamp}>
                    <Avatar><ChatIcon/></Avatar>
                    <ListItemText>{msg.sender} logged in</ListItemText>
                </ListItem>
            )
        } else if (msg.type === 'CHAT') {
            return (
                <ListItem key={msg.timeStamp}>
                    <Avatar>{msg.sender[0].toUpperCase()}</Avatar>
                    <ListItemText>{msg.content}</ListItemText>
                </ListItem>
            )
        } else if (msg.type === 'LEAVE') {
            return (
                <ListItem key={msg.timeStamp}>
                    <Avatar><ChatIcon/></Avatar>
                    <ListItemText>{msg.sender} left chat</ListItemText>
                </ListItem>
            )
        }
    }

    render() {
        const {
            classes,
            visible,
            onSendMessage,
            onChange,
            messages,
            messageText,
        } = this.props;

        return (
            <Fade in={visible}>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <div className={classes.chatArea}>
                            <List>
                                {messages.map(msg => this.formatMessage(msg))}
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.bottom}>
                        <form onSubmit={(event) => {
                            onSendMessage();
                            event.preventDefault();
                        }}>
                            <Grid container>
                                <Grid item sm={11} xs={12} align="center">
                                    <TextField autoFocus fullWidth placeholder="Enter Text" value={messageText}
                                               onChange={onChange()}></TextField>
                                </Grid>
                                <Grid item sm={1} xs={12} align="center">
                                    <Button variant="contained" color="primary"
                                            onClick={() => onSendMessage()}>Send</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Fade>
        );
    }
}


Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);