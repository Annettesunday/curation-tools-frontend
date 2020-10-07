import React, {FC, Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"

import PocketLogo from "../assets/pocket.png";
import "../css/Pocket.css"

const useStyles = makeStyles({
    large: {
        width: "10%",
        height: "50%",
        margin: "5px"
    },

})
const Pocket: FC = () => {
    const classes = useStyles();

    return(
        <div className="Content-container">
            <Avatar variant="square"alt="Pocket Logo" src={PocketLogo} className={classes.large} />
            <Button variant="contained" color="primary" size="large">Annette Sunday</Button>
        </div>
    )

}
export default Pocket;