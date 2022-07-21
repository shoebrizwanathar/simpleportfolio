import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import Logo0 from "../../assets/images/Logo0";

const Logo = ({ setHomeIsActive, ...rest }) => {
    const classes = useStyles();
    return (
        <Link
            spy
            smooth
            duration={500}
            offset={-70}
            to="home"
            onSetActive={() => setHomeIsActive(true)}
            onSetInactive={() => setHomeIsActive(false)}
            className={classes.root}
        >
            <Logo0 {...rest} />
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
}));

export default Logo;
