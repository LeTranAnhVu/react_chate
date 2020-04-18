import React from "react";
import {Avatar, Badge, Box} from "@material-ui/core";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import {trimStr} from "../Helpers/common";
import {makeStyles} from "@material-ui/core/styles";
import useStyles from "../Hooks/Styles/CommonMessageStyles";


const ChatHeader = ({info, className}) => {
    const classes = useStyles();
    return (
        <div className={className}>
            <Box className={classes.box}>
                <div className={classes.left}>
                    <div className={`${classes.dot} ${info.is_online ? "online" : "offline"}`}/>
                    <Avatar variant="circle" src={info.avatar} className={`${classes.avatar} ${classes.avatarMedium}`}/>
                    <p className={classes.name}>{info.display_name}</p>
                </div>
                <Badge badgeContent={99} color="error">
                    <NotificationsNoneOutlinedIcon/>
                </Badge>
            </Box>
        </div>
    );
};

export default ChatHeader;