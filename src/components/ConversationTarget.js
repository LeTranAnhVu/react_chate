import React from "react";
import {Box,Card} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    root: {
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        objectFit: "cover",
        margin: "auto"
    },
    displayName: {
        fontSize: theme.spacing(2.5),
        textAlign: "center"
    },
    metaTime: {
        fontSize: theme.spacing(2),
        fontWeight: theme.typography.fontWeightLight,
        color: theme.palette.text.disabled,
        textAlign: "center"
    }
}));

const ConversationTarget = ({info}) => {
    const classes = useStyle();
    return (
        <Box p={3}>
            <Box mb={2}>
                <Avatar variant="circle" src={info.avatar} className={classes.avatar}/>
            </Box>
            <p className={classes.displayName}>{info.display_name}</p>
            <p className={classes.metaTime}>{info.last_time}</p>
        </Box>
    );
};

export default ConversationTarget;