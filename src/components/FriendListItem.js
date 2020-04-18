import React from "react";
import {Box, Avatar, Badge, Tooltip} from "@material-ui/core";
import useStyles from "../Hooks/Styles/CommonMessageStyles";
import {trimStr} from "../Helpers/common";

const FriendListItem = ({info}) => {
    const classes = useStyles();
    return (
        <Box className={`${classes.box} ${classes.boxHover}`}>
            <div className={classes.left}>
                <div className={`${classes.dot} ${info.is_online ? "online" : "offline"}`}/>
                <Avatar variant="square" src={info.avatar} className={`${classes.avatar} ${classes.avatarSmall}`}/>

                <Tooltip title={info.display_name} arrow>
                    <p className={classes.name}>{trimStr(info.display_name, 25)}</p>
                </Tooltip>

            </div>

            <Badge badgeContent={99} color="error"/>
        </Box>
    );
};

export default FriendListItem;