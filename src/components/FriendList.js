import React from "react";
import FriendListItem from "./FriendListItem";
import {Divider, Typography, Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
        <Card className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title} variant="h6">
                    FRIENDS
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

export default FriendList;