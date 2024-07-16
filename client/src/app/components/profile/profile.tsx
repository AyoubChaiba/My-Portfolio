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
import { fetchProfile } from '../../service';
import { Profile as ProfileType, TimelineInfoProps } from '../../types';
import { urlFor } from '../../sanityClient';


const TimelineInfo: React.FC<TimelineInfoProps> = ({ title, text, link }) => {
    return (
        <TimelineItem className='timeline-item'>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent>
                <Typography color="initial" className='timeline-text'>
                    {text ? (
                        <>{title}: <span>{text}</span></>
                    ) : (
                        <>{title}: <MUILink href={link?.url} underline="hover" target="_blank" rel="noopener noreferrer">@{link?.name}</MUILink></>
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
            const data = await fetchProfile("profile");
            setProfile(data);
        };
        getProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const profileLinks = profile.links.map(link => {
        return {
            name: link.name.toLowerCase(),
            link: link
        };
    });


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
                        {/* <TimelineInfo title='Birthday' text={profile.birthday.split('T')[0]} /> */}
                        <TimelineInfo title='Email' text={profile.email} />
                        <TimelineInfo title='Phone' text={profile.phone} />
                        {
                            profileLinks.map((link) => {
                                return <TimelineInfo key={link.name} title={link.name} link={link.link} />;
                            })
                        }

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
