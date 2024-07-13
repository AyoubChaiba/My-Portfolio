import "./portfolio.scss";
import { ContentGrid } from '../../components/widgets/content/ContentGrid';
import { Box, Tabs, Tab, Grid, CardContent, CardMedia, Typography, Chip, Stack, Card, IconButton, tabsClasses  } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { useState } from "react";
import { FaEye, FaLink, FaGithub  } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';
import MainButton from "../../components/widgets/button/MainButton";

const Portfolio = () => {
    const [value, setValue] = useState('All');

    const projects = [
        {
            id: 1,
            category: 'Web Dev',
            title: 'Karmove',
            stack: 'React, Gatsby JS',
            client: 'Amani Karisa',
            type: 'Business Website',
            description: 'A business website built using React and Gatsby JS for Amani Karisa.',
            image: 'https://picsum.photos/id/1/400/400',
            github: 'https://github.com/karmove',
            link: 'https://karmove.com'
        },
        {
            id: 2,
            category: 'Motion Graphic',
            title: 'ROD\'eau',
            stack: 'WordPress, JavaScript',
            client: 'Justus Walther',
            type: 'Business Website',
            description: 'A business website built using WordPress and JavaScript for Justus Walther.',
            image: 'https://picsum.photos/id/2/400/400',
            github: 'https://github.com/rodeau',
            link: 'https://rodeau.com'
        },
        {
            id: 3,
            category: 'Photography',
            title: 'Vu & Friends',
            stack: 'WordPress',
            client: 'Vu & Friends',
            type: 'Restaurant Website',
            description: 'A restaurant website built using WordPress for Vu & Friends.',
            image: 'https://picsum.photos/id/3/400/400',
            github: 'https://github.com/vuandfriends',
            link: 'https://vuandfriends.com'
        },
        {
            id: 4,
            category: 'Web Design',
            title: 'TechHub-Blog',
            stack: 'React JS, Gatsby JS, Sanity CMS, CSS',
            client: 'TechHub',
            type: 'Blog Website',
            description: 'A blog website built using React JS, Gatsby JS, and Sanity CMS for TechHub.',
            image: 'https://picsum.photos/id/4/400/400',
            github: 'https://github.com/techhub-blog',
            link: 'https://techhub-blog.com'
        },
        {
            id: 5,
            category: 'Photography',
            title: 'Vu & Friends',
            stack: 'WordPress',
            client: 'Vu & Friends',
            type: 'Restaurant Website',
            description: 'A restaurant website built using WordPress for Vu & Friends.',
            image: 'https://picsum.photos/id/5/400/400',
            github: 'https://github.com/vuandfriends',
            link: 'https://vuandfriends.com'
        },
        {
            id: 6,
            category: 'Web Design',
            title: 'TechHub-Blog',
            stack: 'React JS, Gatsby JS, Sanity CMS, CSS',
            client: 'TechHub',
            type: 'Blog Website',
            description: 'A blog website built using React JS, Gatsby JS, and Sanity CMS for TechHub.',
            image: 'https://picsum.photos/id/6/400/400',
            github: 'https://github.com/techhub-blog',
            link: 'https://techhub-blog.com'
        },
    ];

    const [visibleProjects, setVisibleProjects] = useState(4);

    const handleLoadMore = () => setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);

    const renderGridCards = (category: string) => {
        const filteredProjects = projects.filter(project => category === 'All' || project.category === category);
        return (
            <Grid container columnSpacing={2} rowSpacing={4}>
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} key={project.id} margin={0} padding={0}>
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
                                        image={project.image}
                                        alt={project.title}
                                        className="portfolio-card-media"
                                    />
                                    <Chip
                                        label={project.type}
                                        className="portfolio-chip"
                                        sx={{
                                            fontSize: {
                                                lg : 12,
                                                md: 11,
                                            },
                                        }}
                                    />
                                    <div className="portfolio-card-buttons">
                                        <IconButton
                                            aria-label="show"
                                            className="btn-card"
                                            sx={{
                                                fontSize: {
                                                    lg : 20,
                                                    md: 19,
                                                    xs : 17
                                                },
                                            }}
                                            >
                                            <FaEye />
                                        </IconButton>
                                        <IconButton
                                            aria-label="github"
                                            className="btn-card"
                                            onClick={() => window.open(project.github, "_blank")}
                                            sx={{
                                                fontSize: {
                                                    lg : 20,
                                                    md: 19,
                                                    xs : 17
                                                },
                                            }}
                                            >
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton
                                            aria-label="link"
                                            className="btn-card"
                                            onClick={() => window.open(project.link, "_blank")}
                                            sx={{
                                                fontSize: {
                                                    lg : 20,
                                                    md: 19,
                                                    xs : 17
                                                },
                                            }}
                                            >
                                            <FaLink />
                                        </IconButton>
                                    </div>
                                </div>
                                <CardContent className="portfolio-card-content">
                                    <Typography gutterBottom variant="h6" component="div" fontWeight={500} className="portfolio-card-title">
                                        {project.title}
                                    </Typography>
                                    <Stack direction="column" spacing={1} className="portfolio-stack">
                                        <Typography variant="body2" color="black"  className="portfolio-card-stack">
                                            Stack: <Typography variant="body2" color="text.secondary" fontWeight={500} display={'contents'} >{ project.stack}</Typography>
                                        </Typography>
                                        <Typography variant="body2" color="black" className="portfolio-card-client">
                                            Client: <Typography variant="body2" color="text.secondary" fontWeight={500} display={'contents'} >{project.client}</Typography>
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
            <ContentGrid title={'Portfolio'} classContent={'portfolio'}>
                <TabContext value={value}>
                    <Box className="portfolio-tabs-box">
                        <Tabs
                            value={value}
                            onChange={(_, newValue: string) => setValue(newValue)}
                            className="portfolios"
                            variant="scrollable"
                            allowScrollButtonsMobile
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
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
                        {['All', 'Web Dev', 'Motion Graphic', 'Photography', 'Web Design'].map(tabValue => (
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
                        ))}
                    </AnimatePresence>
                </TabContext>
                <MainButton text={`${visibleProjects < projects.length ? `Load More  (${projects.length - visibleProjects})` : 'No More Projects' }`} className="btn-load" handleClick={handleLoadMore} />
            </ContentGrid>
        </main>
    );
};

export default Portfolio;
