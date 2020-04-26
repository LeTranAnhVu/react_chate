import React from "react";
import {Box} from "@material-ui/core";
import Chat from "./Chat";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    header: {
        padding: theme.spacing(3),
        boxShadow: "-1px 1px 6px -3px rgba(82,82,82,1)"
    },
    body: {
        flexGrow: 1,
        overflow: "scroll"
    },

    type: {
        padding: theme.spacing(3),
        boxShadow: "-1px -1px 6px -3px rgba(82,82,82,1)"
    }
}));
const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
          <Chat/>
        </Box>
    );
};

export default Main;