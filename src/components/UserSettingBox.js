import React from "react";
import AppBox from "./Common/AppBox";
import WidgetHeader from "./Common/WidgetHeader";
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.text.disabled,
        "&:hover": {
            color: theme.palette.text.secondary,
        }
    }
}))
const UserSettingBox = () => {
    const classes = useStyles();
    return (
        <AppBox mb={2}>
            <WidgetHeader titleBig={true} titleName={"#Vu Le"}>
                <SettingsOutlinedIcon className={classes.icon}/>
            </WidgetHeader>
        </AppBox>
    )
};

export default UserSettingBox;