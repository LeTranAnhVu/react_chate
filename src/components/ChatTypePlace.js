import React from "react";
import {Box, IconButton, FormControl, OutlinedInput, InputAdornment} from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicNoneIcon from '@material-ui/icons/MicNone';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "no-wrap"
    }
}));
const ChatTypePlace =({className}) => {
    const classes = useStyles();
    return (
        <Box className={`${className} ${classes.root}`}>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <AttachFileIcon />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <MicNoneIcon />
            </IconButton>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <OutlinedInput
                    id="message"
                    value={null}
                    startAdornment={<InputAdornment position="start"><MessageIcon/></InputAdornment>}
                />
            </FormControl>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <SendIcon />
            </IconButton>

        </Box>
    )
};

export default ChatTypePlace;