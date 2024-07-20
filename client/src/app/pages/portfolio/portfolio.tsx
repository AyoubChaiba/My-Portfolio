import "./portfolio.scss";
import {
    Box,
    Tabs,
    Tab,
    tabsClasses,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainButton from "../../components/widgets/Button/MainButton.tsx";
import { Projects, Project } from "../../types/index.ts";
import { fetchProjects } from "../../service.ts";
import { ContentGrid } from '../../components/widgets/Content/ContentGrid.tsx';
import RenderGridCards from "../../components/widgets/projects/renderGridCards.tsx";
import ModalDialog from '../../components/widgets/projects/ModalDialog.tsx';
import ProjectContentLoader from "../../components/widgets/ContentLoader/ProjectContentLoader.tsx";


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

    const handleLoadMore = () => setVisibleProjects(prev => prev + 6);

    const handleOpenDialog = (project: Project) => {
        setCurrentProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setCurrentProject(null);
    };

    return (
        <main className="portfolio-main">
            <ContentGrid
                title="Portfolio"
                classContent="portfolio"
                dataUpdate={projects ? projects[0]._updatedAt.split('T')[0] : "..."}
                >
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
                        {["All", "Web Dev", "Mobile Dev", "Web Design"].map(tabValue =>
                            value === tabValue && (
                                <motion.div
                                    key={tabValue}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TabPanel value={tabValue} className="portfolio-tabpanel">
                                        {loading ? (
                                            <ProjectContentLoader />
                                        ) : (
                                            <RenderGridCards
                                                category={tabValue}
                                                projects={projects}
                                                visibleProjects={visibleProjects}
                                                handleOpenDialog={handleOpenDialog}
                                            />
                                        )}
                                    </TabPanel>
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </TabContext>
                {projects && !loading && (
                    <MainButton
                        text={
                            visibleProjects < projects.length
                                ? `Load More (${projects.length - visibleProjects})`
                                : "No More Projects"
                        }
                        className="btn-load"
                        handleClick={handleLoadMore}
                    />
                )}
            </ContentGrid>
            <ModalDialog
                openDialog={openDialog}
                handleCloseDialog={handleCloseDialog}
                currentProject={currentProject}
            />
        </main>
    );
};

export default Portfolio;
