import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import IndividualConversation from "./IndividualConversation";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        overflow: "scroll"
    },

}));


const ChatBody = ({className, currentTargets, turns, currentUser}) => {
    const rootRef = useRef(null);
    const [childHeight, updateChildHeight] = useState(null);
    const classes = useStyles();

    const scrollBottom = (_childHeight) => {
        if (_childHeight !== childHeight) {
            updateChildHeight(_childHeight);
        }


    };
    useLayoutEffect(() => {
        rootRef.current.scroll({
            top: childHeight,
            left: 0,
            behavior: "smooth"
        });
    }, [childHeight]);
    return (
        <div ref={rootRef} className={`${className} ${classes.root}`}>
            <IndividualConversation
                onChangeHeight={scrollBottom}
                turns={turns}
                currentTarget={currentTargets[0]}
                currentUser={currentUser}
            />
        </div>
    );
};

export default ChatBody;

