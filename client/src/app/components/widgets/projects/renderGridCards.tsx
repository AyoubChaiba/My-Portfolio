import { Grid, Card, CardMedia, Chip, CardContent, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { FaRegWindowRestore  } from "react-icons/fa6";
import { urlFor } from "../../../sanityClient";
import { RenderGridCardsProps } from "../../../types/componentType";
import MainButton from "../../common/Button/MainButton";


const RenderGridCards = ({ category, projects, visibleProjects, handleOpenDialog }: RenderGridCardsProps) => {
    const filteredProjects = projects?.filter(
        project => category === "All" || project.category === category
    );

    return (
        <Grid container columnSpacing={2} rowSpacing={4}>
            {filteredProjects?.slice(0, visibleProjects).map((project, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={12}
                    lg={6}
                    key={project._id}
                    margin={0}
                    padding={0}
                    display="flex"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{ flex: 1, display: 'flex' }}
                    >
                        <Card style={{ flex: 1, display: 'flex', flexDirection: 'column' }} className="portfolio-card">
                            <div style={{ flex: '0 0 auto' }} className="portfolio-card-media-wrapper">
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
                                            xs: "11px",
                                            sm: "12px",
                                            md: "13px",
                                        },
                                    }}
                                />
                                <div className="portfolio-card-buttons">
                                    <MainButton icon={<FaRegWindowRestore  />} className={'btn-card'} handleClick={() => handleOpenDialog(project)} />
                                </div>
                            </div>
                            <CardContent className="portfolio-card-content">
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="portfolio-card-title"
                                    fontWeight={600}
                                    fontSize={{ xs: 12, sm: 16, md: 19 }}
                                >
                                    {project.title}
                                </Typography>
                                <Stack direction="column" spacing={1} className="portfolio-stack">
                                    <Typography variant="body2" fontWeight={500} color="#1976d2" className="portfolio-card-stack">
                                        Stack:{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {project.stack}
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body2" fontWeight={500} color="#1976d2" className="portfolio-card-client">
                                        Client:{" "}
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.secondary"
                                        >
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

export default RenderGridCards;
