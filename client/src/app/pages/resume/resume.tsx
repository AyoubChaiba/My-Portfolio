import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import CustomTimeline from "../../components/widgets/Timeline/CustomTimeline";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import "./resume.scss";
import { TimelineInfo } from '../../components/widgets/Timeline/TimelineInfo';
import { Grid, List, ListItem } from "@mui/material";


const working = {
    title: "Working History",
    icon: <FaBriefcase />,
    work: [
        {
            company: 'Company A',
            position: 'Software Engineer',
            dates: '2020 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.'
        },
        {
            company: 'Company B',
            position: 'Frontend Developer',
            dates: '2018 - 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.'
        },
        {
            company: 'Company C',
            position: 'Project Manager',
            dates: '2015 - 2019',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.'
        },
    ]
};

const education = {
    title: "Education History",
    icon: <FaGraduationCap />,
    education: [
        {
            institution: 'University of Liverpool',
            degree: 'Bachelor of Computer Science',
            dates: '2014 - 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.'
        },
        {
            institution: 'National University of Singapore',
            degree: 'Master of Science in Computer Science',
            dates: '2018 - 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.'
        },
    ]
};

const clients = [
    {
        name: 'Client A',
        logo: 'https://placehold.co/200x100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.',
    },
    {
        name: 'Client B',
        logo: 'https://placehold.co/200x100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.',
    },
    {
        name: 'Client C',
        logo: 'https://placehold.co/200x100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, ipsum sed dignissim fermentum, velit arcu scelerisque metus, non faucibus lectus ante sed velit. Donec id libero non urna aliquet dignissim.',
    }
]

const Resume: React.FC = () => {

    return (
        <main>
            <ContentGrid title={'Resume'} classContent={'resume'}>
                <Grid container>
                    <Grid item md={12} lg={6} className='resume-content'>
                        <CustomTimeline
                            title={working.title}
                            icon={working.icon}
                            style={{
                                sizeIcon: 60,
                                marginLeft: "-26px",
                                headHeight: "125px",
                            }}
                        >
                            {working.work.map((item, index) => (
                                <TimelineInfo
                                    key={index}
                                    company={item.company}
                                    position={item.position}
                                    dates={item.dates}
                                    description={item.description}
                                />
                            ))}
                        </CustomTimeline>
                    </Grid>
                    <Grid item md={12} lg={6} className=''>
                        <CustomTimeline
                            title={education.title}
                            icon={education.icon}
                            style={{
                                sizeIcon: 60,
                                marginLeft: "-26px",
                                headHeight: "125px",
                            }}
                        >
                            {education.education.map((item, index) => (
                                <TimelineInfo
                                    key={index}
                                    company={item.institution}
                                    position={item.degree}
                                    dates={item.dates}
                                    description={item.description}
                                />
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </ContentGrid>
            <ContentGrid title={'Clients'} classContent={'clients'} >
                <div className="clients">
                    <div className="scroller" >
                        <List className="clients-items" >
                        {clients.concat(clients).map((client, index) => (
                            <ListItem key={index} className="client-card">
                                <img src={client.logo} alt={client.name} loading="lazy" />
                            </ListItem>
                        ))}
                        </List>
                    </div>
                </div>
            </ContentGrid>
        </main>
    );
};

export default Resume;
