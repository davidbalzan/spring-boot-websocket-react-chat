import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import Modal from "@material-ui/core/es/Modal/Modal";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/es/TextField/TextField";
import Grid from "@material-ui/core/es/Grid/Grid";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class LoginForm extends Component {
    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                id="loginForm">
                <div style={getModalStyle()} className={classes.paper}>
                    <form id="loginForm" name="loginForm">
                        <Grid spacing={24}>
                            <Grid item xs={12}>
                                <Typography variant="title">Type your username</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="name"
                                    placeholder="Username"
                                    autoComplete="off"
                                    className={classes.textField}></TextField>
                            </Grid>
                            <Grid item className={classes.buttonWrapper}>
                                <Button variant="contained" color="primary" className={classes.button}>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const LoginFormWrapped = withStyles(styles)(LoginForm);

export default LoginFormWrapped;