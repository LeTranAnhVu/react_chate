import React from "react";
import {Divider} from "@material-ui/core";
import ConversationTarget from "./ConversationTarget";
import ConversationSharedResources from "./ConversationSharedResources";

const conversation = {
    id: 1,
    display_name: "Orlando Diggs",
    avatar: "/images/default-avatar.jpg",
    is_online: true,
    last_time: "1 minute ago"
};

const resourses = [
    {
        id: 1,
        display_name: "a1.dif",
        url: "/images/a1.gif"
    },
    {
        id: 2,
        display_name: "a2.jsdf",
        url: "/images/a2.jpg"
    },
    {
        id: 3,
        display_name: "dfasdf",
        url: "/images/a3.jpg"
    },
    {
        id: 4,
        display_name: "fasdfasd",
        url: "/images/a4.jpeg"
    },
    {
        id: 5,
        display_name: "fasdfasd",
        url: "/images/a5.jpg"
    },
    {
        id: 6,
        display_name: "fasdfasd",
        url: "/images/a6.jpg"
    },
    {
        id: 7,
        display_name: "dfasdf",
        url: "/images/a7.png"
    },
    {
        id: 8,
        display_name: "fasdfasd",
        url: "/images/a8.png"
    },
    {
        id: 9,
        display_name: "fasdfasd",
        url: "/images/a9.png"
    },
    {
        id: 10,
        display_name: "fasdfasd",
        url: "/images/a10.png"
    },
];
const ConversationInfo = () => {
    return (
        <div>
            <ConversationTarget info={conversation}/>
            <Divider/>
            <ConversationSharedResources resources={resourses}/>
        </div>
    );
};

export default ConversationInfo;