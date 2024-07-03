import Typography from '@mui/material/Typography';
import BasicTimeline from '../Timeline/basicTimeline';
import './profile.scss';
import MainButton from '../button/MainButton';
import { FaDownload } from "react-icons/fa6";



const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className='name' >Ayoub Chaiba</Typography>
                <Typography className='job' >Full stack</Typography>
            </div>
            <figure>
                <img src={'../../../../public/assets/avatar.JPG'} alt="Avatar" />
            </figure>
            <div className='profile_info'>
                <div className='timeline_info'>
                    <BasicTimeline />
                </div>
                <div className='btn_resume'>
                    <MainButton text={"Download CV"} className={''} icon={<FaDownload />} />
                </div>
            </div>
        </div>
    );
}

export default Profile;

