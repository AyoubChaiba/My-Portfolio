import "./portfolio.scss";
import {
    Box,
    Tabs,
    Tab,
    Grid,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Stack,
    Card,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    tabsClasses,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { FaEye, FaLink, FaGithub } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import MainButton from "../../components/widgets/Button/MainButton";
import { Projects, Project } from "../../types";
import { fetchProjects } from "../../service";
import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import { urlFor } from "../../sanityClient";

const Portfolio = () => {
    const [value, setValue] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [projects, setProjects] = useState<Projects | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAsync = async (): Promise<void> => {
        setLoading(true);
        try {
            const dataProjects = await fetchProjects("projects");
            setProjects(dataProjects);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
        };
        fetchDataAsync();
    }, []);

    const handleLoadMore = () =>
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);

    const handleOpenDialog = (project: Project) => {
        setCurrentProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setCurrentProject(null);
    };

const renderGridCards = (category: string) => {
    if (!projects) return null;
    const filteredProjects = projects.filter(
        (project) => category === "All" || project.category === category
    )
    return (
        <Grid container columnSpacing={2} rowSpacing={4}>
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={project._id} margin={0} padding={0}>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <Card className="portfolio-card">
                    <div className="portfolio-card-media-wrapper">
                        <CardMedia
                            component="img"
                            height="140"
                            image={urlFor(project.photo[0].asset).url()}
                            alt={project.title}
                            className="portfolio-card-media"
                        />
                        <Chip
                            label={project.type}
                            className="portfolio-chip"
                            sx={{
                            height: {
                                xs: "25px",
                                sm: "26px",
                                md: "27px",
                            },
                            fontSize: {
                                xs: "12px",
                                sm: "11px",
                                md: "11px",
                            },
                            }}
                        />
                        <div className="portfolio-card-buttons">
                            <IconButton
                                aria-label="show"
                                className="btn-card"
                                sx={{
                                    fontSize: 30,
                                }}
                                onClick={() => handleOpenDialog(project)}
                            >
                                <FaEye />
                            </IconButton>
                        </div>
                    </div>
                    <CardContent className="portfolio-card-content">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight={500}
                        className="portfolio-card-title"
                    >
                        {project.title}
                    </Typography>
                    <Stack direction="column" spacing={1} className="portfolio-stack">
                        <Typography variant="body2" color="black" className="portfolio-card-stack">
                        Stack:{" "}
                        <Typography component="span" variant="body2" color="text.secondary" fontWeight={500}>
                            {project.stack}
                        </Typography>
                        </Typography>
                        <Typography variant="body2" color="black" className="portfolio-card-client">
                        Client:{" "}
                        <Typography component="span" variant="body2" color="text.secondary" fontWeight={500}>
                            {project.client}
                        </Typography>
                        </Typography>
                    </Stack>
                    </CardContent>
                </Card>
                </motion.div>
            </Grid>
            ))}
        </Grid>
    );
};

return (
    <main className="portfolio-main">
        <ContentGrid title={"Portfolio"} classContent={"portfolio"}>
            <TabContext value={value}>
            <Box className="portfolio-tabs-box">
                <Tabs
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                className="portfolios"
                variant="scrollable"
                allowScrollButtonsMobile
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                    },
                }}
                >
                <Tab value="All" label="All" className="portfolio-item" />
                <Tab value="Web Dev" label="Web Dev" className="portfolio-item" />
                <Tab value="Mobile Dev" label="Mobile Dev" className="portfolio-item" />
                <Tab value="Web Design" label="Web Design" className="portfolio-item" />
                </Tabs>
            </Box>
            <AnimatePresence mode="wait">
                {["All", "Web Dev", "Mobile Dev", "Web Design"].map(
                (tabValue) =>
                    value === tabValue && (
                    <motion.div
                        key={tabValue}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TabPanel value={tabValue} className="portfolio-tabpanel">
                        {renderGridCards(tabValue)}
                        </TabPanel>
                    </motion.div>
                    )
                )}
            </AnimatePresence>
            </TabContext>
            <MainButton
            text={
                visibleProjects < projects?.length
                ? `Load More (${projects.length - visibleProjects})`
                : "No More Projects"
            }
            className="btn-load"
            handleClick={handleLoadMore}
            />
        </ContentGrid>

        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="lg">
            {currentProject && (
            <>
                <DialogTitle>{currentProject.title}</DialogTitle>
                <DialogContent dividers>
                <img src={urlFor(currentProject.photo[0].asset).url()} alt={currentProject.title} width="100%" />
                <Typography variant="body1" gutterBottom>
                    {currentProject.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Stack: {currentProject.stack}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Client: {currentProject.client}
                </Typography>
                <Stack direction="row" spacing={1} marginTop={2}>
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaLink />}
                    href={currentProject.link}
                    target="_blank"
                    >
                    Live Site
                    </Button>
                    <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<FaGithub />}
                    href={currentProject.github}
                    target="_blank"
                    >
                    GitHub
                    </Button>
                </Stack>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                    Close
                </Button>
                </DialogActions>
            </>
            )}
        </Dialog>
        </main>
);
};

export default Portfolio;