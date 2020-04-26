import React, {useEffect, useState} from "react";
import {Box, IconButton, FormControl, OutlinedInput, InputAdornment} from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from "@material-ui/icons/Message";
import {makeStyles} from "@material-ui/core/styles";
import {lightBlue} from "@material-ui/core/colors";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "no-wrap"
    },
    icon: {
        color: lightBlue[500]
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
});


const ChatTypePlace = ({className, sendMessage}) => {
    const classes = useStyles();
    const [typingMessage, setMessage] = useState("");
    const onTyping = (e) => {
        let text = e.target.value;
        setMessage(text);
    };

    const onSendMessage = () => {
        let trimmedMess = typingMessage.trim();
        if (trimmedMess && typeof trimmedMess === "string") {
            sendMessage(trimmedMess);
            setMessage('');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box className={`${className} ${classes.root}`}>
                <IconButton className={classes.icon} aria-label="upload picture" component="span">
                    <AttachFileIcon/>
                </IconButton>
                <IconButton className={classes.icon} aria-label="upload picture" component="span">
                    <MicNoneIcon/>
                </IconButton>

                <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                        id="message"
                        value={typingMessage}
                        onChange={onTyping}
                        startAdornment={<InputAdornment position="start">
                            <MessageIcon className={classes.icon} size="small"/></InputAdornment>}
                    />
                </FormControl>
                <IconButton onClick={onSendMessage} className={classes.icon} aria-label="send message"
                            component="span">
                    <SendIcon/>
                </IconButton>
            </Box>
        </ThemeProvider>
    );
};

export default ChatTypePlace;