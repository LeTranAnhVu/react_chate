import React from "react";
import {Grid, Avatar, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}));
const ResourceGallery = ({resources}) => {
    const classes = useStyles();
    if (resources && resources.length > 0)
        return (
            <Box p={1}>
                <Grid container spacing={1}>
                    {
                        resources.map(resource => {
                            return <Grid item xs={4}>
                                <Avatar variant="square" className={classes.img} src={resource.url}
                                        alt={resource.name}/>
                            </Grid>;
                        })
                    }
                </Grid>
            </Box>

        );
    return (
        <p>
            There is no images
        </p>
    );
};

export default ResourceGallery;