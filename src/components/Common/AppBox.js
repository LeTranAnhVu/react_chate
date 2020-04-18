import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

const AppBox = ({children, ...attr}) => {
    const classes = useStyles();
    return (
        <Box {...attr} className={classes.root}>
            {children}
        </Box>
    );
};

export default AppBox;