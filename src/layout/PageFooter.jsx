import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const PageFooter = (props) => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/eshanwp">
                    Eshan
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}

export default PageFooter;
