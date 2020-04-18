import React from "react";
import ChannelListItem from "./ChannelListItem";
import {Divider, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import WidgetHeader from "./Common/WidgetHeader";
import AppBox from "./Common/AppBox";

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
        <AppBox mb={2}>
            <WidgetHeader titleName={"CHANNELS"}>
                <p>3</p>
            </WidgetHeader>
            <Divider/>
            <div className={classes.list}>
                {buildList()}
            </div>

        </AppBox>
    );
};

export default ChannelList;