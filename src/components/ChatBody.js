import React, {useEffect, useRef} from "react";
import IndividualConversation from "./IndividualConversation";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },

}));


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
const turns = [
    {
        owner: 1,
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
        owner: "me",
        messages: [
            {
                id: 3,
                content: "Chao em"
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
const currentTarget = {
    1: {
        id: 1,
        display_name: "Orlando Diggs",
        avatar: "/images/default-avatar.jpg",
        is_online: true
    }
};


const ChatBody = ({className}) => {
    const rootRef = useRef(null);
    const classes = useStyles();


    // useEffect(() => {
    //     console.log('heiei', rootRef.current.offsetHeight);
    //     if(rootRef.current.firstChild && rootRef.current.firstChild.offsetHeight) {
    //         rootRef.current.scroll({
    //             top: rootRef.current.firstChild.offsetHeight,
    //             left: 0,
    //             behavior: "smooth"
    //         })
    //     }
    //
    // },[rootRef.current.firstChild.offsetHeight]);
    const scrollBottom = (childHeight) => {
        rootRef.current.scroll({
            top: childHeight,
            left: 0,
            behavior: "smooth"
        })
    };
    return (
        <div ref={rootRef} className={`${className} ${classes.root}`}>
            <IndividualConversation onChangeHeight={scrollBottom} turns={turns} currentTarget={currentTarget[1]}/>
        </div>
    );
};

export default ChatBody;

