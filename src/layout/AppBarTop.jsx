import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const AppBarTop = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    99x
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarTop;
