import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CustomTimeline from '../widgets/Timeline/CustomTimeline';
import './profile.scss';
import MainButton from '../widgets/button/MainButton';
import { FaDownload, FaCircleUser } from "react-icons/fa6";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Link as MUILink } from '@mui/material';
import { fetchProfile } from '../../profileService';
import { Profile as ProfileType, Link } from '../../types';
import { urlFor } from '../../sanityClient';

interface TimelineInfoProps {
    title: string;
    value: string | Link;
    isLink?: boolean;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({ title, value, isLink }) => {
    return (
        <TimelineItem className='timeline-item'>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent>
                <Typography color="initial" className='timeline-text'>
                    {isLink && typeof value !== 'string' ? (
                        <>{title}: <MUILink href={value.url} underline="hover" target="_blank" rel="noopener noreferrer">{value.name}</MUILink></>
                    ) : (
                        <>{title}: <span>{value}</span></>
                    )}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};


const Profile: React.FC = () => {
    const [profile, setProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const getProfile = async () => {
            const data = await fetchProfile();
            setProfile(data);
        };
        getProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const profileLinks = profile.links.reduce((acc: { [key: string]: Link }, link) => {
        acc[link.name.toLowerCase()] = link;
        return acc;
    }, {});

    console.log(profile.links)

    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className='name'>{profile.fullName}</Typography>
                <Typography className='job'>{profile.job}</Typography>
            </div>
            <figure>
                <img src={urlFor(profile.photo.asset).url()} alt="Avatar" />
            </figure>
            <div className='profile_info'>
                <div className='timeline_info'>
                    <CustomTimeline icon={<FaCircleUser />}
                        style={{
                            sizeIcon: 45 ,
                            marginLeft: -19,
                            headIconTop: "-24px",
                        }}
                        className='timeline_profile'
                        >
                        <TimelineInfo title='Birthday' text={profile._createdAt.split('T')[0]} />
                        <TimelineInfo title='Email' text={profile.email} />
                        <TimelineInfo title='Phone' text={profile.phone} />
                        {profileLinks.linkedin && <TimelineInfo title='LinkedIn' link={profileLinks.linkedin} />}
                        {profileLinks.github && <TimelineInfo title='GitHub' link={profileLinks.github} />}
                    </CustomTimeline>
                </div>
                <div className='btn_resume'>
                    <MainButton text="Download CV" icon={<FaDownload />} />
                </div>
            </div>
        </div>
    );
};

export default Profile;
