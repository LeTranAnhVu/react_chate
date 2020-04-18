import React from "react";
import ConversationInfo from "./ConversationInfo";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        background: theme.palette.action.hover,
        "& > *": {
            marginBottom: theme.spacing(3)
        }

    }
}));
const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ConversationInfo/>
        </div>
    );
};

export default RightSide;