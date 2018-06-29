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


    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12} className={classes.bottom}>
                    <Grid container>
                        <Grid item xs={11}>
                            <TextField fullWidth placeholder="Enter Text"></TextField>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="primary">Send</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);