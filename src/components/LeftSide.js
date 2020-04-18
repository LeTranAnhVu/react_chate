import React from "react";
import FriendList from "./FriendList";
import {makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import ChannelList from "./ChannelList";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        "& > *": {
            marginBottom: theme.spacing(3)
        }

    }
}));
const LeftSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ChannelList/>
            <FriendList/>
        </div>
    );
};

export default LeftSide;