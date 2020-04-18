import React from "react";
import FriendList from "./FriendList";
import {makeStyles} from "@material-ui/core/styles";
import ChannelList from "./ChannelList";
import UserSettingBox from "./UserSettingBox";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        padding: theme.spacing(2),
        background: theme.palette.action.hover,
    }
}));
const LeftSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserSettingBox/>
            <ChannelList/>
            <FriendList/>
        </div>
    );
};

export default LeftSide;