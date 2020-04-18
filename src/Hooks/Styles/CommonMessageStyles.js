import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px 15px",
        cursor: "pointer",
        userSelect: "none",
    },
    boxHover: {
        "&:hover": {
            background: "#e6e6e64f",
            borderRadius: "25px"
        }
    },
    left: {
        display: "flex",
        alignItems: "center",
    },
    dot: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        "&.online": {
            background: theme.palette.success.light,
        },
        "&.offline": {
            background: theme.palette.text.disabled,
        }
    },
    name: {
        paddingRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
        fontSize: theme.spacing(1.75),
        fontWeight: theme.typography.fontWeightLight
    },
    avatar: {
        marginLeft: theme.spacing(1)
    },
    avatarSmall: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    avatarMedium: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },

    avatarLarge: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    notification: {
        marginRight: theme.spacing(0.5)
    }
}));