import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatTypePlace from "./ChatTypePlace";
import {makeStyles} from "@material-ui/core/styles";
import useSocket from "../Hooks/useSocket";

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
        flexGrow: 1
    },

    type: {
        padding: theme.spacing(1),
        boxShadow: "-1px -1px 6px -3px rgba(82,82,82,1)"
    }
}));


//=======FAKE DATA==============
const messages = [
    {
        id: 1,
        content: "hello",
        owner: 1
    },
    {
        id: 2,
        content: "\"Chào anh Tuấn,\n" +
            "Em là Vũ Lê và em có trao đổi với anh về việc làm thêm mùa hè tại Farm qua Whatsapp rồi ạ. Dưới đây\n" +
            "là 4 CV của em cũng như của mấy bạn em (Duy Hà, Trâm Trần, Khánh Đinh).\n" +
            "Tụi em dù là học sinh sinh viên nhưng không ngại việc làm nắng mưa ở nông trại và mặc dù vừa mới qua\n" +
            "vài tháng nhưng cả 4 đứa em đã từng làm việc part time tại Phần Lan (nhân viên phục vụ nhà hàng và\n" +
            "nhân viên rửa xe), tụi em rất mong muốn được làm việc và trải nghiệm công việc này, rất mong anh\n" +
            "giúp đỡ.\n" +
            "Em có một mong muốn là, nếu được thì anh có thể sắp xếp giúp cho tụi em được làm chung một khu được\n" +
            "không anh? Nếu không được cũng không sao đâu ạ, vì ở chung tiện sinh hoạt hơn thôi ạ.\n" +
            "Tụi em mong sẽ nhận được tin tốt từ anh sớm nhất ạ. Cám ơn anh và chúc anh có một ngày đầu tuần vui\n" +
            "vẻ.\n" +
            "\"",
        owner: 1
    },
    {
        id: 3,
        content: "Chao em",
        owner: null
    }
];


const listUser = {
    23: {
        id: 23,
        display_name: "Vu Le",
        username: "letrananhvu",
        avatar: "/images/vule.jpg",
        is_online: true
    },
    1: {
        id: 1,
        display_name: "Orlando Diggs",
        username: "Diggs",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    2: {
        id: 2,
        display_name: "Carmen Velasco",
        username: "Carmen",
        avatar: "/images/default-avatar.jpg",
        is_online: false
    },
    3: {
        id: 3,
        display_name: "Marie Jensen",
        username: "Marie",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    4: {
        id: 4,
        display_name: "Alex Lee",
        username: "Alex",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    },
    5: {
        id: 5,
        display_name: "Leo Gill",
        username: "Leo",
        avatar: "/images/default-avatar.jpg",
        is_online: false
    },
    6: {
        id: 6,
        display_name: "Britney Cooper",
        username: "Britney",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    }
};

function getRandomInt(max, withOut) {
    let rd =Math.floor(Math.random() * Math.floor(max)) + 1;
    while(withOut && withOut === rd) {
        rd = Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    return rd;
}

let currentUserId = getRandomInt(6);
let currentTargetId = getRandomInt(6);
const currentUser = listUser[currentUserId];
//
const currentTargets = [listUser[currentTargetId]];
console.log(currentTargets);


// turn is transform data from messages api from server
let _turns = [
    {
        owner: currentUserId,
        messages: [
            {
                id: 1,
                content: "hello"
            },
            {
                id: 2,
                content: "\"Chào anh Tuấn,\n" +
                    "Em là Vũ Lê và em có trao đổi với anh về việc làm thêm mùa hè tại Farm qua Whatsapp rồi ạ. Dưới đây\n" +
                    "là 4 CV của em cũng như của mấy bạn em (Duy Hà, Trâm Trần, Khánh Đinh).\n" +
                    "Tụi em dù là học sinh sinh viên nhưng không ngại việc làm nắng mưa ở nông trại và mặc dù vừa mới qua\n" +
                    "vài tháng nhưng cả 4 đứa em đã từng làm việc part time tại Phần Lan (nhân viên phục vụ nhà hàng và\n" +
                    "nhân viên rửa xe), tụi em rất mong muốn được làm việc và trải nghiệm công việc này, rất mong anh\n" +
                    "giúp đỡ.\n" +
                    "Em có một mong muốn là, nếu được thì anh có thể sắp xếp giúp cho tụi em được làm chung một khu được\n" +
                    "không anh? Nếu không được cũng không sao đâu ạ, vì ở chung tiện sinh hoạt hơn thôi ạ.\n" +
                    "Tụi em mong sẽ nhận được tin tốt từ anh sớm nhất ạ. Cám ơn anh và chúc anh có một ngày đầu tuần vui\n" +
                    "vẻ.\n" +
                    "\""
            },
        ]
    },
    {
        owner: currentTargetId,
        messages: [
            {
                id: 3,
                content: "Chao em Brian"
            },
            {
                id: 4,
                content: "Anh Nhan dc cv cuar em r nha"
            },
            {
                id: 5,
                content: "học sinh sinh viên nhưng không ngại việc làm nắng mưa ở nông trại và mặc dù vừa mới qua vài tháng nhưng cả 4 đứa em đã từng làm việc part time tại Phần Lan (nhân viên phục vụ nhà hàng và nhân viên rửa xe), tụi em rất mong muốn được làm việc và trải nghiệm công việc này, rất mong anh giúp đỡ. Em có một mong muốn là, nế"
            }
        ]
    }
];

//=======END FAKE DATA==============












const Chat = () => {
    const classes = useStyles();

    const [turns, setTurns] = useState([..._turns]);
    const [newMessagePacket, setNewMessagePacket] = useState(null);

    const socket = useSocket();
    const room = 13;

    // socket
    useEffect(() => {
        if (socket) {
            socket.emit("join_room", {user_id: currentUser.id, room: room});
        }

        socket.on("chat", (messagePackage) => {
            setNewMessagePacket(messagePackage);
        });
    }, [socket]);

    const onSendMessage = (message) => {
        if (socket) {
            socket.emit("chat", {message: message, room, user_id: currentUser.id});
        }
    };
    // socket


    const onNewMessageArrive = (mesPackage) => {
        /*
        * message = {message_id, message, username, room}
        * */
        // transform message data to a turn
        /*
        * turn = {
        *   owner: 1
        *   messages : [
        *       id: 1
        *       content: 'sdfjaasdfas'
        *   ]
        * }
        * */

        let turn = {
            owner: mesPackage.user_id,
            messages: [{
                id: mesPackage.message_id,
                content: mesPackage.message
            }]
        };
        setTurns([...turns, turn]);
    };

    // update when there is new Message
    useEffect(() => {
        if (newMessagePacket) {
            onNewMessageArrive(newMessagePacket);
        }
    }, [newMessagePacket]);

    return (
        <Box className={classes.root}>
            <ChatHeader info={currentUser} className={classes.header}/>
            <ChatBody className={classes.body}
                      currentTargets={currentTargets}
                      currentUser={currentUser}
                      turns={turns}
            />
            <ChatTypePlace sendMessage={onSendMessage} className={classes.type}/>
        </Box>
    );
};

export default Chat;