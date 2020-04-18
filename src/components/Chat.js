import React from "react";
import {Box} from "@material-ui/core";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTypePlace from "./ChatTypePlace";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    header: {
        padding: theme.spacing(1.5),
        boxShadow: "-1px 1px 6px -3px rgba(82,82,82,1)"
    },
    body: {
        flexGrow: 1,
        overflow: "scroll"
    },

    type: {
        padding: theme.spacing(1),
        boxShadow: "-1px -1px 6px -3px rgba(82,82,82,1)"
    }
}));

const currentConversation = {
    user: {
        id: 1,
        display_name: "Orlando Diggs",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    messages: [
    ]
};
const Chat = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <ChatHeader info={currentConversation.user} className={classes.header}/>
            <ChatBody className={classes.body}/>
            <ChatTypePlace className={classes.type}/>
        </Box>
    );
};

export default Chat;