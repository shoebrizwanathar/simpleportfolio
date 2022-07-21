import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loaderContext";

const LoaderContainer = ({ children }) => {
    const {setIsLoading} = useContext(LoaderContext)
    const classes = useStyles();
    return (
        <motion.div
            initial={{
                y:0
            }}
            animate={{
                y:"-100vh"
            }}
            transition={{
                delay:0,
                duration:0
            }}
            onAnimationComplete={definition => {
                setIsLoading(false)
              }}
            className={classes.container}
            >
            <div className={classes.content}>{children}</div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position:"fixed",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FF4C29',
        zIndex: 10000,
    },
    content: {
        margin: "0 auto",
    },
}));

export default LoaderContainer;
