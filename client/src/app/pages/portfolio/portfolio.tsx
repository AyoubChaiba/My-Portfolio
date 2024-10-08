import "./portfolio.scss";
import { Box, Tabs, Tab, tabsClasses } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainButton from "../../components/common/Button/MainButton";
import { Projects, Project } from "../../types/apiTypes";
import { fetchProjects } from "../../services/service";
import ContentGrid from '../../components/widgets/GridContent/ContentGrid';
import RenderGridCards from "../../components/widgets/projects/renderGridCards";
import ModalDialog from '../../components/widgets/projects/ModalDialog';
import { useFetchData } from "../../hooks/useFetchData";
import ProjectContentLoader from "../../components/widgets/projects/ProjectContentLoader";

const Portfolio: React.FC = () => {
    const [value, setValue] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(4);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const handleLoadMore = () => setVisibleProjects(prev => prev + 6);

    const { data: projects, loading: projectsLoading } = useFetchData<Projects>(fetchProjects, "projects", [] as Projects);

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
                dataUpdate={projects[0]?._updatedAt && projects[0]._updatedAt.split('T')[0]}
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
                            <Tab value="web-dev" label="Web Dev" className="portfolio-item" />
                            <Tab value="mobile-dev" label="Mobile Dev" className="portfolio-item" />
                            <Tab value="web-design" label="Web Design" className="portfolio-item" />
                        </Tabs>
                    </Box>
                    <AnimatePresence mode="wait">
                        {["All", "web-dev", "mobile-dev", "web-design"].map(tabValue =>
                            value === tabValue && (
                                <motion.div
                                    key={tabValue}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TabPanel value={tabValue} className="portfolio-tabpanel">
                                        {projectsLoading ? (
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
                {projects && !projectsLoading && (
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
