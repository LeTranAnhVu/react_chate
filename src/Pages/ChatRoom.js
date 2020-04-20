import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Main from "../components/Main";


const useStyles = makeStyles(theme => ({
    part: {
        height: "100vh",
        overflow: "scroll",
        padding: "0 !important"
    }
}));

function ChatRoom() {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid className={classes.part} item xs={3}>
                <LeftSide/>
            </Grid>
            <Grid className={classes.part} item xs={6}>
                <Main/>
            </Grid>
            <Grid className={classes.part} item xs={3}>
                <RightSide/>
            </Grid>

        </Grid>
    );
}

export default ChatRoom;
