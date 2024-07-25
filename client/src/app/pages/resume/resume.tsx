import ContentGrid from "../../components/widgets/Content/ContentGrid";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import "./resume.scss";
import { Box, Grid, List, ListItem } from "@mui/material";
import { fetchCertifications, fetchEducations, fetchWorking, fetchClients } from "../../service";
import { Certifications, Educations, Working, Clients } from "../../types/apiTypes";
import TimelineInfo from "../../components/widgets/Timeline/TimelineInfo";
import { TimelineInfoResume } from "../../components/widgets/Timeline/TimelineInfoResume";
import { useFetchData } from "../../hooks/useFetchData";
import { formatDate } from "../../utils/DateTimeFormat";
import CertificationCard from "../../components/widgets/CertificationCard/CertificationCard";
import { motion } from "framer-motion";
import { useCustomInView } from "../../hooks/useCustomInView";
import { CertificatesContentLoader, ClientsContentLoader, ResumeContentLoader } from "../../components/common/ContentLoader/MainLoader";
import { ResumeVariants } from "../../utils/animationVariants";
import { urlFor } from "../../sanityClient";

const Resume: React.FC = () => {
    const { data: { title: titleWorking, work, _updatedAt: workUpdate }, loading: workLoading } =
        useFetchData<Working>(fetchWorking, "working", {} as Working);

    const { data: { title: titleEducation, education }, loading: educationLoading } =
        useFetchData<Educations>(fetchEducations, "educations", {} as Educations);

    const { data: certifications, loading: certificationLoading } =
        useFetchData<Certifications>(fetchCertifications, "certifications", [] as Certifications);

    const { data: clients, loading: clientsLoading } =
        useFetchData<Clients>(fetchClients, "clients", [] as Clients);

    const { ref: certificationRef, inView: certificationInView } = useCustomInView();

    const repeatedClients = clients ? Array.from({ length: 20 }, (_, i) => clients[i % clients.length]) : [];

    return (
        <main>
            <ContentGrid
                title={"Experience"}
                classContent={"resume"}
                dataUpdate={workUpdate && formatDate({ date: workUpdate })}
            >
                <Grid container paddingX={{ xs : 0 , sm : 1 }}>
                    <Grid item md={12} lg={6}>
                        {workLoading ? (
                            <ResumeContentLoader />
                        ) : (
                            work && (
                                <TimelineInfo
                                    title={titleWorking}
                                    icon={<FaBriefcase />}
                                    className="timeline_resume working"
                                >
                                    {work.map((item, index) => (
                                        <TimelineInfoResume
                                            key={index}
                                            name={item.position}
                                            subName={item.company}
                                            dates={item.dates}
                                            description={item.description}
                                            location={item.location}
                                            logo={urlFor(item.photo.asset).url()}
                                        />
                                    ))}
                                </TimelineInfo>
                            )
                        )}
                    </Grid>
                    <Grid item md={12} lg={6}>
                        {educationLoading ? (
                            <ResumeContentLoader />
                        ) : (
                            education && (
                                <TimelineInfo
                                    title={titleEducation}
                                    icon={<FaGraduationCap />}
                                    className="timeline_resume educations"
                                >
                                    {education.map((item, index) => (
                                        <TimelineInfoResume
                                            key={index}
                                            name={item.degree}
                                            subName={item.institution}
                                            dates={item.dates}
                                            description={item.description}
                                            location={item.location}
                                            logo={urlFor(item.photo.asset).url()}
                                        />
                                    ))}
                                </TimelineInfo>
                            )
                        )}
                    </Grid>
                </Grid>
            </ContentGrid>
            <ContentGrid
                title={"Clients"}
                classContent={"clients"}
                dataUpdate={clients[0]?._updatedAt && formatDate({ date: clients[0]?._updatedAt })}
            >
                <div className="clients">
                    <div className="scroller">
                        {clientsLoading ? (
                            <ClientsContentLoader />
                        ) : (
                            <List className="clients-items">
                                {repeatedClients.map((client, index) => (
                                    <ListItem key={index} className="client-card">
                                        <img src={urlFor(client.logo.asset).url()} alt={client.name} loading="lazy" />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </div>
                </div>
            </ContentGrid>
            <ContentGrid
                title={"Certificates"}
                classContent={"certificates"}
                dataUpdate={certifications[0]?._updatedAt && formatDate({ date: certifications[0]?._updatedAt })}
            >
                <Box sx={{ padding: { xs: 0, md: 2 }, boxShadow: "none" }}>
                    {certificationLoading ? (
                        <CertificatesContentLoader />
                    ) : (
                        certifications.map((certification, index) => (
                            <motion.div
                                ref={certificationRef}
                                initial="hidden"
                                animate={certificationInView ? "visible" : "hidden"}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                variants={ResumeVariants}
                                whileHover={{ scale: 1.009 }}
                                key={index}
                            >
                                <CertificationCard certification={certification} index={index} />
                            </motion.div>
                        ))
                    )}
                </Box>
            </ContentGrid>
        </main>
    );
};

export default Resume;
