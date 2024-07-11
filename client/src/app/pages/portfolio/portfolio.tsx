import "./portfolio.scss";
import { ContentGrid } from '../../components/widgets/content/ContentGrid';
import { Box, Tabs, Tab, Grid, CardContent, CardMedia, Typography, Chip, Stack, Card, IconButton } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { useState } from "react";
import { FaEye, FaLink, FaGithub  } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';

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
            image: 'https://picsum.photos/id/1/400/400',
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
            image: 'https://picsum.photos/id/1/400/400',
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
            image: 'https://picsum.photos/id/1/400/400',
            github: 'https://github.com/techhub-blog',
            link: 'https://techhub-blog.com'
        },
    ];

    const renderGridCards = (category: string) => {
        return (
            <Grid container spacing={2}>
                {projects.filter(project => category === 'All' || project.category === category).map((project, index) => (
                    <Grid item xs key={project.id} margin={0} padding={0}>
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
                                    <Chip label={project.type} className="portfolio-chip" />
                                    <div className="portfolio-card-buttons">
                                        <IconButton
                                            aria-label="show"
                                            className="btn-card"
                                            >
                                            <FaEye />
                                        </IconButton>
                                        <IconButton
                                            aria-label="show"
                                            className="btn-card"
                                            onClick={() => window.open(project.github, "_blank")}
                                            >
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton
                                            aria-label="show"
                                            className="btn-card"
                                            onClick={() => window.open(project.link, "_blank")}
                                            >
                                            <FaLink />
                                        </IconButton>
                                    </div>
                                </div>
                                <CardContent className="portfolio-card-content">
                                    <Typography gutterBottom variant="h5" component="div" className="portfolio-card-title">
                                        {project.title}
                                    </Typography>
                                    <Stack direction="column" spacing={1} className="portfolio-stack">
                                        <Typography variant="body2" color="text.secondary" className="portfolio-card-stack">
                                            Stack: {
                                                project.stack.split(',').map((stack, i ) => (
                                                    i <= 2 ? <Chip key={stack.trim()} label={stack.trim()} className="card-stack-chip" />
                                                    : <Chip key={stack.trim()} label={" ... "} className="card-stack-chip" />
                                                ))
                                            }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="portfolio-card-client">
                                            Client: <Typography variant="body2" fontWeight={500} display={'contents'} >{project.client}</Typography>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="portfolio-card-description">
                                            {project.description}
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
                <Grid container spacing={2}>
                    <Grid item >
                        <Tabs
                            value={value}
                            onChange={(_, newValue: string) => setValue(newValue)}
                            scrollButtons={true}
                        >
                            <Tab value="All" label="All"  />
                            <Tab value="Web Dev" label="Web Dev"  />
                            <Tab value="Motion Graphic" label="Motion Graphic" />
                            <Tab value="Photography" label="Photography"  />
                            <Tab value="Web Design" label="Web Design"  />
                        </Tabs>
                    </Grid>
                    <Grid item>
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
                                        {/* <TabPanel value={tabValue} className="portfolio-tabpanel">
                                            {renderGridCards(tabValue)}
                                        </TabPanel> */}
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </Grid>
                </Grid>
            </ContentGrid>
        </main>
    );
};

export default Portfolio;
