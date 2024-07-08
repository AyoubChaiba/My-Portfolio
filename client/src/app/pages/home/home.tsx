import { useState, useRef } from "react";
import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/content/TextWithSpaces";
import { FaDev, FaDatabase, FaChartSimple, FaMobileScreenButton } from "react-icons/fa6";
import "./home.scss";
import { Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import MainButton from "../../components/widgets/button/MainButton";

const text = "Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing elit. Non aperiam animi laudantium nemo dolorem, quis odit minima incidunt sequi quae provident ratione facilis neque fuga repellendus laborum quasi eum error? Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br><br> Magni unde ad quas culpa architecto cum iste laborum modi repudiandae nesciunt itaque tenetur eos voluptas, pariatur ab, recusandae sapiente quam quasi.";

const services = [
    { icon: <FaDev className='service-icon' />, title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { icon: <FaMobileScreenButton className='service-icon' />, title: 'Mobile Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { icon: <FaChartSimple className='service-icon' />, title: 'Digital Marketing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { icon: <FaDatabase className='service-icon' />, title: 'Data Analysis', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
];

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

    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    const [visibleSkills, setVisibleSkills] = useState(9);

    const handleLoadMore = () => setVisibleSkills((prevVisibleSkills) => prevVisibleSkills + 6);

    return (
        <main>
            <ContentGrid title={'About Me'} classContent={'about'}>
                <TextWithSpaces text={text} />
            </ContentGrid>
            <ContentGrid title={'My Services'} classContent={'services'}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="services-items">
                    {services.map(service => (
                        <Grid item xs={12} sm={6} md={6} lg={3} key={service.title}>
                            <motion.div
                                className="service-card"
                                ref={ref1}
                                initial="hidden"
                                animate={isInView1 ? "visible" : "hidden"}
                                whileHover={{ scale: 1.05 }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    },
                                }}
                            >
                                {service.icon}
                                <Typography variant="h6" fontSize={14} fontWeight={600}>{service.title}</Typography>
                                <Typography fontSize={12}>{service.description}</Typography>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
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
                <MainButton text={`${visibleSkills < skills.length ? `Load More  (${skills.length - visibleSkills})` : 'No More Skills' }`} className="btn-load" handleClick={handleLoadMore} />
            </ContentGrid>
        </main>
    );
}

export default Home;
