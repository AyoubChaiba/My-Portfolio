import { useRef } from "react";
import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/Content/TextWithSpaces";
import "./home.scss";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { MainButton } from "../../components/common/Button/MainButton";
import { fetchAbout, fetchService, fetchSkills } from "../../service";
import { About, Services, Skills } from '../../types/apiTypes';
import { urlFor } from "../../sanityClient";
import { useFetchData } from "../../hooks/useFetchData";
import { useVisibility } from "../../hooks/useVisibility";
import { formatDate } from "../../utils/DateTimeFormat";
import { ServicesLoader, SkillsLoader, AboutContentLoader } from "../../components/common/ContentLoader/MainLoader";
import { containerVariants, itemVariants, cardContainerVariants, cardItemVariants } from "../../utils/animationVariants";


const Home : React.FC = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);

    const { data: { about , _updatedAt: aboutUpdate }, loading: aboutLoading } =
        useFetchData<About>(fetchAbout, 'about', {} as About);
    const { data: services, loading: servicesLoading } =
        useFetchData<Services>(fetchService, 'services', [] as Services);
    const { data: skills, loading: skillsLoading } =
        useFetchData<Skills>(fetchSkills, 'skills', [] as Skills);

    const { visibleItems: visibleSkills, handleLoadMore: handleLoadMoreSkills } = useVisibility(12, 5);

    return (
        <main>
            <ContentGrid
                title={'About Me'}
                classContent={'about'}
                dataUpdate={aboutUpdate &&  formatDate({ date :aboutUpdate })}
            >
                {aboutLoading || !about ? (
                        <AboutContentLoader />
                ) : (
                    <TextWithSpaces text={about} />
                )}
            </ContentGrid>

            <ContentGrid
                title={'My Services'}
                classContent={'services'}
                dataUpdate={ services[0]?._updatedAt &&  formatDate({ date : services[0]?._updatedAt })}
                >
                <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        className="services-items"
                        >
                        {servicesLoading || !services.length ? (
                            <ServicesLoader />
                        ) : (
                            services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={6} lg key={index}>
                                    <motion.div
                                        className="service-card"
                                        whileHover={{ scale: 1.03 }}
                                        custom={index}
                                        variants={itemVariants}
                                    >
                                        {service.photo && (
                                            <img src={urlFor(service.photo.asset).url()} alt={service.title} />
                                        )}
                                        <Typography variant="h6" fontSize={14} fontWeight={600}>{service.title}</Typography>
                                        <Typography fontSize={12}>{service.description}</Typography>
                                    </motion.div>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </motion.div>
            </ContentGrid>

            <ContentGrid
                title={'My Top Skills'}
                classContent={'skills'}
                dataUpdate={ skills[0]?._updatedAt && formatDate({ date : skills[0]?._updatedAt })}
            >
                <motion.div
                    ref={ref2}
                    // initial={isAnimation ? "visible" : "hidden"}
                    initial={"hidden"}
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={cardContainerVariants}
                    >
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
                        className="skills-items">
                        {skillsLoading || !skills.length ? (
                            <SkillsLoader />
                        ) : (
                            skills.slice(0, visibleSkills).map((skill, index) => (
                                <Grid item xs={4} sm={4} lg={3} key={skill.name} >
                                    <motion.div
                                        custom={index}
                                        variants={cardItemVariants}
                                        whileHover={{ y: -2 }}
                                    >
                                        <Box
                                            className="skills-card"
                                            sx={{
                                                cursor: 'default',
                                                background: '#fff',
                                                padding: '15px',
                                                minHeight: '40px',
                                                display: 'flex',
                                                gap: '15px',
                                                alignItems: 'center',
                                                textTransform: 'capitalize',
                                                borderRadius: '7px',
                                                width: '100%',
                                                height: 'auto',
                                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                                border: `1px solid #${skill.color}`
                                        }}>
                                            <img src={urlFor(skill.photo.asset).url()} alt={skill.name} />
                                            <Typography
                                                sx={{ display: { xs: 'none', sm: 'flex' }}}
                                                variant="h6"
                                                fontSize={14}
                                                fontWeight={600}
                                            >
                                                {skill.name}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </motion.div>
                <MainButton
                    text={`${visibleSkills < skills.length ? `Load More  (${skills.length - visibleSkills})` : 'No More Skills' }`}
                    className="btn-load"
                    handleClick={handleLoadMoreSkills}
                />
            </ContentGrid>
        </main>
    );
}

export default Home;
