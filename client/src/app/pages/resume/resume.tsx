import React from 'react';
import { ContentGrid } from "../../components/widgets/content/ContentGrid";
import CustomTimeline from "../../components/widgets/Timeline/CustomTimeline";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import "./resume.scss";
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Grid from '@mui/material/Grid';
import { WorkingProps } from '../../types';


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

const TimelineInfo: React.FC<WorkingProps> = ({ company, position, dates, description }) => {
    return (
        <TimelineItem className='timeline-item'>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    minHeight: "150px",
                }}
            >
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '13px', sm: '13px', md: '14px' },
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.025em',
                        marginTop: "-12px",
                        "& span": {
                            color: "#232323"
                        }
                    }}
                    className='timeline-titel'
                >
                    {position} - <span>{company}</span>
                </Typography>
                <Typography variant="caption" color="black" className='timeline-description'>{dates}</Typography>
                <Typography variant="body2" color="textSecondary" paddingY={2} className='timeline-description'>{description}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

const Resume: React.FC = () => {
    return (
        <main>
            <ContentGrid title={'Resume'} classContent={'resume'}>
                <Grid container spacing={1}>
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
        </main>
    );
};

export default Resume;
