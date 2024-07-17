import { useState, useRef, useEffect } from "react";
import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/content/TextWithSpaces";
import "./home.scss";
import { Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import MainButton from "../../components/widgets/button/MainButton";
import { fetchProfile, fetchService, fetchSkills } from "../../service";
import { Services, Skills } from '../../types';
import { urlFor } from "../../sanityClient";
import ContentLoader from 'react-content-loader';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
        },
    }),
};

const Home = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);

    const [visibleSkills, setVisibleSkills] = useState(8);
    const [about, setAbout] = useState<string | null>(null);
    const [services, setServices] = useState<Services>([]);
    const [skills, setSkills] = useState<Skills>([]);
    const [loading, setLoading] = useState(true);
    const [isAnimation, setIsAnimation] = useState(false);

    const handleLoadMore = () => {
        setVisibleSkills(prevVisibleSkills => prevVisibleSkills + 6)
        setIsAnimation(true)
    };

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
                        <ContentLoader
                            viewBox="0 0 500 140"
                            speed={2}
                            backgroundColor="#cccccc"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="13" rx="4" ry="4" width="100%" height="9" />
                            <rect x="0" y="29" rx="4" ry="4" width="50%" height="9" />
                            <rect x="0" y="50" rx="4" ry="4" width="100%" height="9" />
                            <rect x="0" y="65" rx="4" ry="4" width="60%" height="9" />
                            <rect x="0" y="79" rx="4" ry="4" width="40%" height="9" />
                            <rect x="0" y="100" rx="4" ry="4" width="100%" height="9" />
                            <rect x="0" y="115" rx="4" ry="4" width="50%" height="9" />
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
                                viewBox="0 0 400 150"
                                speed={2}
                                backgroundColor="#cccccc"
                                foregroundColor="#ecebeb"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                    <rect x="9" y="10" rx="2" ry="2" width="116" height="116" />
                                    <rect x="137" y="10" rx="2" ry="2" width="116" height="116" />
                                    <rect x="266" y="10" rx="2" ry="2" width="116" height="116" />
                                </ContentLoader>
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
                dataUpdate={skills[0]?._updatedAt ? skills[0]._updatedAt.split('T')[0] : "..."}
            >
                <motion.div
                    ref={ref2}
                    initial={isAnimation ? "visible" : "hidden"}
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={containerVariants}
                    >
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
                        className="skills-items">
                        {loading || !skills.length ? (
                            <ContentLoader
                                viewBox="0 0 400 150"
                                speed={2}
                                backgroundColor="#cccccc"
                                foregroundColor="#ecebeb"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                    <rect x="9" y="10" rx="2" ry="2" width="116" height="116" />
                                    <rect x="137" y="10" rx="2" ry="2" width="116" height="116" />
                                    <rect x="266" y="10" rx="2" ry="2" width="116" height="116" />
                                </ContentLoader>
                        ) : (
                            skills.slice(0, visibleSkills).map((skill, index) => (
                                <Grid item xs={4} sm={4} lg={3} key={skill.name}>
                                    <motion.div
                                        className="skills-card"
                                        custom={index}
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
                            ))
                        )}
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
