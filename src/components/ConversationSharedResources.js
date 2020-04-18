import React from "react";
import {Collapse} from "@material-ui/core";
import {ChevronLeft, ExpandMore} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import WidgetHeader from "./Common/WidgetHeader";
import ResourceGallery from "./ResourceGallery";
import AppBox from "./Common/AppBox";

const useStyle = makeStyles(theme => ({
    root: {},
    header: {
        padding: theme.spacing(2)
    },
}));

const ConversationSharedResources = ({resources}) => {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);
    return (
        <AppBox>
            <WidgetHeader className={classes.header} titleName={"IMAGES"} onClick={()=> setOpen(!open)}>
                {open ? <ExpandMore /> : <ChevronLeft/>}
            </WidgetHeader>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <ResourceGallery resources={resources}/>
            </Collapse>
        </AppBox>
    );
};

export default ConversationSharedResources;