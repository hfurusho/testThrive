import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SubmitIcon from '@material-ui/icons/Publish';
import teal from '@material-ui/core/colors/teal';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            marginTop: 30,
            marginBottom: 30,
        },
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button 
            onClick={props.onClick} 
            className={`card-btn ${props["data-value"]}`} 
            {...props} 
            style={{ color: "#fff", background: teal[500]}}
            startIcon={<SubmitIcon />}
            variant="contained">
                Submit
            </Button>
        </div>
    );
}