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
                    <Avatar>{msg.sender[0]}</Avatar>
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
        } = this.props;

        return (
            <Fade in={visible}>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <List>
                            {messages.map(msg => this.formatMessage(msg))}
                        </List>
                    </Grid>
                    <Grid item xs={12} className={classes.bottom}>
                        <Grid container>
                            <Grid item xs={11}>
                                <TextField fullWidth placeholder="Enter Text"
                                           onChange={onChange()}></TextField>
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained" color="primary"
                                        onClick={() => onSendMessage()}>Send</Button>
                            </Grid>
                        </Grid>
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