import React, {useEffect, useRef} from "react";
import MessageItem from "./MessageItem";
import Box from "@material-ui/core/Box";


const IndividualConversation = ({onChangeHeight, currentTarget, turns = null}) => {
    const buildConversation = () => {
        if (turns) {
            return turns.map((turn, index) => {
                if (turn.owner === "me") {
                    return <MessageItem key={index} owner={"me"} turn={turn} right={true}/>;
                } else {
                    return <MessageItem key={index} owner={currentTarget} turn={turn}/>;
                }
            });
        }
        return <p>there is no conversation</p>;
    };
    const rootRef = useRef({current: {}});
    useEffect(() => {
        onChangeHeight(rootRef.current.offsetHeight);
    }, [rootRef.current.offsetHeight]);
    return (
        <Box ref={rootRef}>
            {buildConversation()}
        </Box>
    );
};

export default IndividualConversation;

