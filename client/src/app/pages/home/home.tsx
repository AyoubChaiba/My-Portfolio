import { useState, useRef, useEffect } from "react";
import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/content/TextWithSpaces";
import "./home.scss";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { motion, useInView } from "framer-motion";
import MainButton from "../../components/widgets/button/MainButton";
import { fetchProfile, fetchService, fetchSkills } from "../../service";
import { Services, Skills } from '../../types';
import { urlFor } from "../../sanityClient";
import ContentLoader from 'react-content-loader'

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const Home = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);

    const [visibleSkills, setVisibleSkills] = useState(9);
    const [about, setAbout] = useState<string | null>(null);
    const [services, setServices] = useState<Services>([]);
    const [skills, setSkills] = useState<Skills>([]);
    const [loading, setLoading] = useState(true);

    const handleLoadMore = () => setVisibleSkills(prevVisibleSkills => prevVisibleSkills + 6);

    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const dataAbout = await fetchProfile("profile");
                const dataServices = await fetchService("services");
                const dataSkills = await fetchSkills("skills");
                setAbout(dataAbout?.about || "");
                setServices(dataServices || []);
                setSkills(dataSkills || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchDataAsync();
    }, []);

    return (
        <main>
            <ContentGrid title={'About Me'} classContent={'about'}>
                {loading || !about ? (
                        <ContentLoader viewBox="0 0 400 160"
                            style={{
                                width: '100%',
                                height: 200,
                            }}
                        >
                            <rect x="0" y="13" rx="4" ry="4" width="100%" height="9" />
                            <rect x="0" y="29" rx="4" ry="4" width="50%" height="8" />
                            <rect x="0" y="50" rx="4" ry="4" width="100%" height="10" />
                            <rect x="0" y="65" rx="4" ry="4" width="60%" height="10" />
                            <rect x="0" y="79" rx="4" ry="4" width="40%" height="10" />
                        </ContentLoader>
                ) : (
                    <TextWithSpaces text={about} />
                )}
            </ContentGrid>

            <ContentGrid
                title={'My Services'}
                classContent={'services'}
                dataUpdate={services[0]?._updatedAt ? services[0]._updatedAt.split('T')[0] : "..."}
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
                        {loading || !services.length ? (
                            <ContentLoader
                                speed={2}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <rect x="9" y="162" rx="2" ry="2" width="116" height="116" />
                                <rect x="137" y="161" rx="2" ry="2" width="116" height="116" />
                                <rect x="266" y="161" rx="2" ry="2" width="116" height="116" />
                            </ContentLoader>
                        ) : (
                            services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={6} lg key={index}>
                                    <motion.div
                                        className="service-card"
                                        whileHover={{ scale: 1.03 }}
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
                dataUpdate={skills[0]?._updatedAt ? skills[0]._updatedAt.split('T')[0] : "..."}
            >
                <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} className="skills-items">
                        {skills.slice(0, visibleSkills).map(skill => (
                            <Grid item xs={4} sm={4} lg={3} key={skill.name}>
                                <motion.div
                                    className="skills-card"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
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
                                    }}
                                >
                                    <img src={urlFor(skill.photo.asset).url()} alt={skill.name} />
                                    <Typography
                                        sx={{ display: { xs: 'none', sm: 'flex' }}}
                                        variant="h6"
                                        fontSize={14}
                                        fontWeight={600}
                                    >
                                        {skill.name}
                                    </Typography>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
                <MainButton
                    text={`${visibleSkills < skills.length ? `Load More  (${skills.length - visibleSkills})` : 'No More Skills' }`}
                    className="btn-load"
                    handleClick={handleLoadMore}
                />
            </ContentGrid>
        </main>
    );
}

export default Home;
