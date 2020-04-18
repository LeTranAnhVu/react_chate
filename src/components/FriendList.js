import React from "react";
import FriendListItem from "./FriendListItem";
import {Divider, Typography, Card} from "@material-ui/core";
import WidgetHeader from "./Common/WidgetHeader";
import {makeStyles} from "@material-ui/core/styles";
import AppBox from "./Common/AppBox";

const listFriends = [
    {
        id: 1,
        display_name: "Orlando Diggs",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    {
        id: 2,
        display_name: "Carmen Velasco",
        avatar: "/images/default-avatar.jpg",
        is_online: false
    },
    {
        id: 3,
        display_name: "Marie Jensen",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    {
        id: 4,
        display_name: "Alex Lee",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    {
        id: 5,
        display_name: "Leo Gill",
        avatar: "/images/default-avatar.jpg",
        is_online: false
    },
    {
        id: 6,
        display_name: "Britney Cooper",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    }
];

const useStyles = makeStyles(theme => ({
    root: {},
    list: {
        marginTop: theme.spacing(2),
    }
}));

const FriendList = () => {
    const classes = useStyles();
    const buildList = () => {
        if (listFriends) {
            return listFriends.map((friendInfo) => {
                return <FriendListItem info={friendInfo} key={friendInfo.id}/>;
            });
        }
        return null;

    };
    return (
        <AppBox>
            <WidgetHeader titleName={"FRIENDS"}>
                <p>75</p>
            </WidgetHeader>
            <Divider/>
            <div className={classes.list}>
                {buildList()}
            </div>
        </AppBox>
    );
};

export default FriendList;