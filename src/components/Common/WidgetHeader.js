import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    header: {
        userSelect: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: theme.typography.fontWeightLight,
        fontSize: "14px",
        padding: theme.spacing(1, 2),

    },
    headerHover: {
        cursor: "pointer",
        "&:hover": {
            background: "#e6e6e64f",
        }
    },
    title: {
        fontSize: "14px",
        fontWeight: theme.typography.fontWeightLight,
    },
    titleBig : {
        fontSize: "20px"
    }

}));

const WidgetHeader = ({titleName, titleBig, onClick, className, children}) => {
    const classes = useStyles();
    return (
        <div className={`${className} ${classes.header} ${onClick ? classes.headerHover : ""}`} onClick={onClick}>
            <Typography className={`${titleBig? classes.titleBig : ''} ${classes.title}`} variant={"h6"}>
                {titleName}
            </Typography>
            {children}
        </div>
    );
};
export default WidgetHeader;