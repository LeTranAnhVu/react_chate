import React from "react";
import {Box, Avatar, Badge, Tooltip} from "@material-ui/core";
import useStyles from "../Hooks/Styles/CommonMessageStyles";
import {trimStr} from "../Helpers/common";

const ChannelListItem = ({info}) => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <div className={classes.left}>
                <Avatar variant="square" src={info.avatar} className={`${classes.avatar} ${classes.medium}`}/>
                <Tooltip title={info.display_name} arrow>
                    <p  className={classes.name}># {trimStr(info.display_name, 25)}</p>
                </Tooltip>
            </div>

            <Badge className={classes.notification} badgeContent={99} color="error"/>
        </Box>
    );
};

export default ChannelListItem;