import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";
import Typewriter from "typewriter-effect";
import homeStyle from './HomeStyle.css';
import ThemeContext from "../../contexts/themeContext";




const Home = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const controls = useAnimation();
    const { t } = useTranslation();

    useEffect(() => {
        if (!isLoading) {
            controls.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.1 + 1.2 },
            }));
        } else {
            controls.start({ opacity: 0, y: 5 });
        }
    }, [isLoading, controls]);


    return (
        <HomeContainer id="home">
            <div>
                {/* <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "0px" }}
                >
                    {t("home_welcome")}
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    , {t("home_i")}
                </Typography> */}
                {/* <motion.div animate={controls} custom={1}>
                    <VideoLogo />
                </motion.div> */}
                <div className="area" >
                    <ul className="circles">
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                        <li className={isDarkMode ? 'circleStyleDark' : 'circleStyleLight'}></li>
                    </ul>
                </div >
                <div className="App">
                    <Typewriter
                        options={{
                            strings: ['UI Developer', 'Frontend Developer', 'Javascript Developer', 'Typescript Developer', 'Web Developer', 'Mobile App Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={2}
                    variant="h2"
                    color="secondary"
                    className={classes.subTitle}
                >
                    {t("home_what_i_do")}
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={3}
                    variant="body2"
                    color="initial"
                    style={{ marginBottom: "0" }}
                >
                    {t("home_job")}
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={4}
                    variant="body1"
                    color="initial"
                    style={{ marginBottom: "30px" }}
                >
                    {t("home_location")}
                </Typography>
                <motion.div animate={controls} custom={5}>
                    <Button
                        component={Link}
                        spy
                        smooth
                        offset={0}
                        duration={500}
                        to="contact"
                        variant="outlined"
                        color="primary"
                        size="large"
                    >
                        {t("home_contact_btn")}
                    </Button>
                    <span className={classes.gapper}></span>
                    <Button
                        spy
                        smooth
                        offset={0}
                        duration={500}
                        variant="outlined"
                        color="primary"
                        size="large"
                        href="resume.pdf"
                        download="shoeb_resume.pdf"
                        target="_blank"
                    >
                        {t("download_resume")}
                    </Button>
                </motion.div>
            </div>
        </HomeContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    subTitle: {
        marginBottom: "16px",
        fontSize: "75px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        },
    },
    customButton: {
        padding: "6px 16px",
        fontSize: "0.9375rem",
        color: "#9E7777",
        border: "1px solid rgba(158, 119, 119, 0.5)",
        textDecoration: "none",
        marginLeft: "17px",
        borderRadius: "5px"
    },
    gapper: {
        marginLeft: "10px",
        marginRight: "10px"
    }
}));

export default Home;
