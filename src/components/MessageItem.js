import React from "react";
import {Avatar, Box} from "@material-ui/core";
import useAvatarStyles from "../Hooks/Styles/CommonMessageStyles";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

// turn = {
//     owner: 1,
//     messages: [
//         {
//             id: 1,
//             content: "hello"
//         },
//         {
//             id: 2,
//             content: "dkgjsdf"
//         },
//     ]
// },

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "flex-end",
        marginTop: theme.spacing(5)
    },
    right: {
        justifyContent: "flex-end"
    },
    rightBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    message: {
        width: "fit-content",
        textAlign: "justify",
        maxWidth: "70%",
        marginLeft: theme.spacing(1),
        marginTop: "5px",
        padding: theme.spacing(1, 2),
        borderRadius: theme.spacing(2),
        background: grey[200]
    }
}));
const MessageItem = ({owner, turn, right}) => {
    const avatarClasses = useAvatarStyles();
    const classes = useStyles();
    const buildMessages = () => {
        if (turn && turn.messages && turn.messages.length > 0) {
            return turn.messages.map(mess => {
                return <p key={mess.id} className={classes.message}>{mess.content}</p>;
            });
        }
        return "error";
    };
    return (
        <Box className={`${classes.root} ${right ? classes.right : ""}`}>
            {
                (owner !== "me") ?
                    <Avatar variant="circle" src={owner.avatar}
                            className={`${avatarClasses.avatarSmall}`}/>
                    : null
            }
            <Box className={`${right ? classes.rightBox : ""}`}>
                {buildMessages()}
            </Box>
        </Box>
    );
};

export default MessageItem;