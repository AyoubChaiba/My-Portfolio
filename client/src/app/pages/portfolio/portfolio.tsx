import "./portfolio.scss";
import { ContentGrid } from '../../components/widgets/content/ContentGrid';
import { Box, Tabs, Tab, Grid, CardContent, CardMedia, Typography, Chip, Stack, Card, IconButton } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';

const Portfolio = () => {
    const [value, setValue] = useState('All');

    const projects = [
        { id: 1, category: 'Web Dev', title: 'Karmove', stack: 'React, Gatsby JS', client: 'Amani Karisa', type: 'Business Website', image: 'https://placehold.co/400x400', github: 'www.github.com', link: 'www.github.com' },
        { id: 2, category: 'Motion Graphic', title: 'ROD\'eau', stack: 'WordPress, JavaScript', client: 'Justus Walther', type: 'Business Website', image: 'https://placehold.co/400x400', github: 'www.github.com', link: 'www.github.com' },
        { id: 3, category: 'Photography', title: 'Vu & Friends', stack: 'WordPress', client: 'Vu & Friends', type: 'Restaurant Website', image: 'https://placehold.co/400x400', github: 'www.github.com', link: 'www.github.com' },
        { id: 4, category: 'Web Design', title: 'TechHub-Blog', stack: 'React JS, Gatsby JS, Sanity CMS', client: 'TechHub', type: 'Blog Website', image: 'https://placehold.co/400x400', github: 'www.github.com', link: 'www.github.com' },
    ];

    const renderGridCards = (category: string) => {
        return (
            <Grid container spacing={2}>
                {projects.filter(project => category === 'All' || project.category === category).map((project, index) => (
                    <Grid item xs={12} lg={6} key={project.id} margin={0} padding={0}>
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
                                    <IconButton aria-label="show" className="portfolio-card-button">
                                        <FaEye />
                                    </IconButton>
                                </div>
                                <CardContent className="portfolio-card-content">
                                    <Typography gutterBottom variant="h5" component="div" className="portfolio-card-title">
                                        {project.title}
                                    </Typography>
                                    <Stack direction="column" spacing={1} className="portfolio-stack">
                                        <Typography variant="body2" color="text.secondary" className="portfolio-card-stack">
                                            Stack: {
                                                project.stack.split(',').map(stack => {
                                                    return <Chip label={stack} className="card-stack-chip"  />;
                                                })
                                            }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="portfolio-card-client">
                                            Client: {project.client}
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
                    <Box sx={{ width: '100%' }} className="portfolio-tabs-box">
                        <Tabs
                            value={value}
                            onChange={(_, newValue: string) => setValue(newValue)}
                            className="portfolios"
                        >
                            <Tab value="All" label="All" className="portfolio-item" />
                            <Tab value="Web Dev" label="Web Dev" className="portfolio-item" />
                            <Tab value="Mobile Dev" label="Mobile Dev" className="portfolio-item" />
                            <Tab value="Web Design" label="Web Design" className="portfolio-item" />
                        </Tabs>
                    </Box>
                    <AnimatePresence mode="wait">
                        {['All', 'Web Dev', 'Mobile Dev', 'Web Design'].map(tabValue => (
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
            </ContentGrid>
        </main>
    );
};

export default Portfolio;
