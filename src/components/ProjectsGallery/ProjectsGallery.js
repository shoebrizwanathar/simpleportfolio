import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { webProjectList, mobileProjectList } from "../../data";
import { useTranslation } from "react-i18next";

const ProjectsGallery = () => {
    const classes = useStyles();
    const { t } = useTranslation()
    const [selectedIdWeb, setSelectedIdWeb] = useState(null);
    const [selectedIdMobile, setSelectedIdMobile] = useState(null);

    const getSelectedWeb = (id) => webProjectList.find((elem) => elem.id === id);
    const getSelectedMobile = (id) => mobileProjectList.find((elem) => elem.id === id);
    return (
        <>
            <div className={classes.projectSectionTitle}>Web Applications</div>
            <AnimateSharedLayout type="crossfade">
                <Grid container spacing={4} className={classes.galleryContainer}>
                    {webProjectList.map((item, k) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={item.id}
                            classes={{ item: classes.item }}
                        >
                            <Card
                                id={item.id}
                                title={item.title}
                                overview={t(`projects_${item.id}_overview`)}
                                backgroundImage={item.backgroundImage}
                                frontImage={item.frontImage}
                                technologies={item.technologies}
                                onClick={() => setSelectedIdWeb(item.id)}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                            />
                        </Grid>
                    ))}
                </Grid>
                <AnimatePresence>
                    {selectedIdWeb && (
                        <ExtendedCard
                            key={selectedIdWeb}
                            id={selectedIdWeb}
                            title={getSelectedWeb(selectedIdWeb).title}
                            overview={t(`projects_${selectedIdWeb}_extended_overview`)}
                            backgroundImage={getSelectedWeb(selectedIdWeb).backgroundImage}
                            frontImage={getSelectedWeb(selectedIdWeb).frontImage}
                            technologies={getSelectedWeb(selectedIdWeb).technologies}
                            handleClose={() => setSelectedIdWeb(null)}
                        />
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>

            <div className={classes.projectSectionTitle}>Mobile Applications</div>
            <AnimateSharedLayout type="crossfade">
                <Grid container spacing={4} className={classes.galleryContainer}>
                    {mobileProjectList.map((item, k) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={item.id}
                            classes={{ item: classes.item }}
                        >
                            <Card
                                id={item.id}
                                title={item.title}
                                overview={t(`projects_${item.id}_overview`)}
                                backgroundImage={item.backgroundImage}
                                frontImage={item.frontImage}
                                technologies={item.technologies}
                                onClick={() => setSelectedIdMobile(item.id)}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                            />
                        </Grid>
                    ))}
                </Grid>
                <AnimatePresence>
                    {selectedIdMobile && (
                        <ExtendedCard
                            key={selectedIdMobile}
                            id={selectedIdMobile}
                            title={getSelectedMobile(selectedIdMobile).title}
                            overview={t(`projects_${selectedIdMobile}_extended_overview`)}
                            backgroundImage={getSelectedMobile(selectedIdMobile).backgroundImage}
                            frontImage={getSelectedMobile(selectedIdMobile).frontImage}
                            technologies={getSelectedMobile(selectedIdMobile).technologies}
                            handleClose={() => setSelectedIdMobile(null)}
                        />
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        overflow: "visible",
        width: "100%",
        margin: "0 auto"
    },
    item: {
        overflow: "visible",
    },
    projectSectionTitle: {
        fontSize: "25px",
        fontFamily: "Cairo,Roboto,'Helvetica Neue',sans-serif",
        fontWeight: "500",
        lineHeight: "1.235"
    }
}));

export default ProjectsGallery;
