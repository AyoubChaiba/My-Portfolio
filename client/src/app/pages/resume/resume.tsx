import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import "./resume.scss";
import { Grid, List, ListItem } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchEducations, fetchWorking, fetchClients } from "../../service";
import { Educations, Working, Clients } from "../../types/apiTypes";
import TimelineInfo from "../../components/widgets/Timeline/TimelineInfo";
import { TimelineInfoResume } from "../../components/widgets/Timeline/TimelineInfoResume";
import ResumeContentLoader from "../../components/common/ContentLoader/ResumeContentLoader";
import { urlFor } from "../../sanityClient";
import ClientsContentLoader from "../../components/common/ContentLoader/ClientsContentLoader";


const Resume: React.FC = () => {
    const [working, setWorking] = useState<Working | null>(null);
    const [educations, setEducations] = useState<Educations | null>(null);
    const [clients, setClients] = useState<Clients | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAsync = async (): Promise<void> => {
            setLoading(true);
            try {
                const [dataWorking, dataEducations, dataClients] = await Promise.all([
                    fetchWorking("working"),
                    fetchEducations("educations"),
                    fetchClients("clients"),
                ]);
                setWorking(dataWorking);
                setEducations(dataEducations);
                setClients(dataClients);
            } catch (error) {
                console.error("Error fetching data");
            } finally {
                setLoading(false);
            }
        };
        fetchDataAsync();
    }, []);


    const repeatedClients = clients ? Array.from({ length: 20 }, (_, i) => clients[i % clients.length]) : [];


    return (
        <main>
            <ContentGrid
                title={"Experience"}
                classContent={"resume"}
                dataUpdate={working?._updatedAt?.split('T')[0] ?? " ... "}
            >
                <Grid container>
                    <Grid item md={12} lg={6}>
                        {loading ? (
                            <ResumeContentLoader />
                        ) : (
                            working && (
                                <TimelineInfo
                                    title={working.title}
                                    icon={<FaBriefcase />}
                                    className="timeline_resume working"
                                >
                                    {working.work.map((item, index) => (
                                        <TimelineInfoResume
                                            key={index}
                                            name={item.position}
                                            subName={item.company}
                                            dates={item.dates}
                                            description={item.description}
                                            location={item.location}
                                        />
                                    ))}
                                </TimelineInfo>
                            )
                        )}
                    </Grid>
                    <Grid item md={12} lg={6}>
                        {loading ? (
                            <ResumeContentLoader />
                        ) : (
                            educations && (
                                <TimelineInfo
                                    title={educations.title}
                                    icon={<FaGraduationCap />}
                                    className="timeline_resume educations"
                                >
                                    {educations.education.map((item, index) => (
                                        <TimelineInfoResume
                                            key={index}
                                            name={item.degree}
                                            subName={item.institution}
                                            dates={item.dates}
                                            description={item.description}
                                            location={item.location}
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
                dataUpdate={clients ? clients[0]?._updatedAt?.split('T')[0] : " ... "}
            >
                <div className="clients">
                    <div className="scroller">
                        {loading ? (
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
        </main>
    );
};

export default Resume;
