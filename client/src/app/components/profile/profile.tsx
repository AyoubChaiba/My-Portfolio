import Typography from '@mui/material/Typography';
import CustomTimeline from '../widgets/Timeline/CustomTimeline';
import './profile.scss';
import MainButton from '../widgets/button/MainButton';
import { FaDownload } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineInfoProps } from '../../types';
import { Link } from '@mui/material';

const profile = {
    name: "Ayoub Chaiba",
    job: "Full stack developer",
    avatar: '../../../../public/assets/avatar.JPG',
    birthday: '06 December 1987',
    email: "henry@domain.com",
    phone: "+212 555 012345",
    linkedin: {
        userName : "@AyoubCh",
        profileLink : "https://www.linkedin.com/in/ayoubchaiba"
    },
    github: {
        userName : "@AyoubChaiba",
        profileLink : "https://www.github.com/ayoubchaiba"
    },
};

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
                        <>{title}: <Link href={link?.profileLink} underline="hover" target="_blank" rel="noopener noreferrer">{link?.userName}</Link></>
                    )}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className='name' >{profile.name}</Typography>
                <Typography className='job' >{profile.job}</Typography>
            </div>
            <figure>
                <img src={profile.avatar} alt="Avatar" />
            </figure>
            <div className='profile_info'>
                <div className='timeline_info'>
                    <CustomTimeline icon={<FaCircleUser />}
                        style={{
                            sizeIcon: 45 ,
                            marginLeft: "-19px",
                            headIconTop: "-24px",
                        }}
                        >
                        <TimelineInfo title={'birthday'} text={profile.birthday} />
                        <TimelineInfo title={'email'} text={profile.email} />
                        <TimelineInfo title={'phone'} text={profile.phone} />
                        <TimelineInfo title={'linkedin'} link={profile.linkedin} />
                        <TimelineInfo title={'github'} link={profile.github} />
                    </CustomTimeline>
                </div>
                <div className='btn_resume'>
                    <MainButton text={"Download CV"} icon={<FaDownload />} />
                </div>
            </div>
        </div>
    );
}

export default Profile;

