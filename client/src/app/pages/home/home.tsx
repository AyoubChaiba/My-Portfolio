import { useState, useRef, useEffect } from "react";
import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/content/TextWithSpaces";
import { FaDev, FaDatabase, FaChartSimple, FaMobileScreenButton } from "react-icons/fa6";
import "./home.scss";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { motion, useInView } from "framer-motion";
import MainButton from "../../components/widgets/button/MainButton";
import { fetchProfile, fetchService } from "../../service";
import { Services } from '../../types';
import { urlFor } from "../../sanityClient";

const skills = [
    { icon: <FaDev className='skill-icon' />, title: 'React' },
    { icon: <FaMobileScreenButton className='skill-icon' />, title: 'JavaScript' },
    { icon: <FaChartSimple className='skill-icon' />, title: 'Node.js' },
    { icon: <FaDatabase className='skill-icon' />, title: 'MongoDB' },
    { icon: <FaDev className='skill-icon' />, title: 'CSS' },
    { icon: <FaMobileScreenButton className='skill-icon' />, title: 'HTML' },
    { icon: <FaChartSimple className='skill-icon' />, title: 'GraphQL' },
    { icon: <FaDatabase className='skill-icon' />, title: 'Firebase' },
    { icon: <FaDev className='skill-icon' />, title: 'TypeScript' },
    { icon: <FaMobileScreenButton className='skill-icon' />, title: 'Android' },
    { icon: <FaChartSimple className='skill-icon' />, title: 'Ionic' },
    { icon: <FaDatabase className='skill-icon' />, title: 'Flutter' },
    { icon: <FaDev className='skill-icon' />, title: 'Python' },
    { icon: <FaMobileScreenButton className='skill-icon' />, title: 'Django' },
    { icon: <FaChartSimple className='skill-icon' />, title: 'Angular' },
];

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
    const [loading, setLoading] = useState(true);

    const handleLoadMore = () => setVisibleSkills(prevVisibleSkills => prevVisibleSkills + 6);

    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const dataAbout = await fetchProfile("profile");
                const dataServices = await fetchService("services");
                setAbout(dataAbout?.about || "");
                setServices(dataServices || []);
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
                    <CircularProgress />
                ) : (
                    <TextWithSpaces text={about} />
                )}
            </ContentGrid>

            <ContentGrid title={'My Services'} classContent={'services'}>
                <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="services-items">
                        {loading || !services.length ? (
                            <CircularProgress />
                        ) : (
                            services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
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

            <ContentGrid title={'My Top Skills'} classContent={'skills'}>
                <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} className="skills-items">
                        {skills.slice(0, visibleSkills).map(skill => (
                            <Grid item xs={4} sm={4} lg={3} key={skill.title}>
                                <motion.div
                                    className="skills-card"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {skill.icon}
                                    <Typography
                                        sx={{ display: { xs: 'none', sm: 'flex' }}}
                                        variant="h6"
                                        fontSize={14}
                                        fontWeight={600}
                                    >
                                        {skill.title}
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
