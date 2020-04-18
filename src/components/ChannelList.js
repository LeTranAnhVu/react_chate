import React from "react";
import ChannelListItem from "./ChannelListItem";
import {Divider, Typography, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const listChannel = [
    {
        id: 1,
        display_name: "Breadfast",
        avatar: "/images/default-gr-avatar.png"
    },
    {
        id: 2,
        display_name: "Music is soul",
        avatar: "/images/default-gr-avatar.png"
    },
    {
        id: 3,
        display_name: "Meet Booking",
        avatar: "/images/default-gr-avatar.png"
    },
    {
        id: 4,
        display_name: "Leave Announcement",
        avatar: "/images/default-gr-avatar.png"
    },
    {
        id: 5,
        display_name: "Technial Leader Group",
        avatar: "/images/default-gr-avatar.png"
    },
    {
        id: 6,
        display_name: "Chate Bot",
        avatar: "/images/default-gr-avatar.png"
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: theme.typography.fontWeightLight,
        fontSize: "14px",

    },
    title: {
        fontSize: "14px",
        fontWeight: theme.typography.fontWeightLight
    },
    list: {
        marginTop: theme.spacing(2),
    }
}));

const ChannelList = () => {
    const classes = useStyles();
    const buildList = () => {
        if (listChannel) {
            return listChannel.map((channelInfo) => {
                return <ChannelListItem info={channelInfo} key={channelInfo.id}/>;
            });
        }
        return null;

    };
    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title} variant="h6">
                    CHANNELS
                </Typography>
                <p>75</p>
            </div>
            <Divider/>
            <div className={classes.list}>
                {buildList()}
            </div>

        </Card>
    );
};

export default ChannelList;