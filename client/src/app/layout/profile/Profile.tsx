import React, { useState } from 'react';
import CustomTimeline from '../../components/widgets/Timeline/CustomTimeline';
import './Profile.scss';
import MainButton from '../../components/common/Button/MainButton';
import { FaDownload, FaCircleUser, FaQrcode } from "react-icons/fa6";
import { Box, Typography } from '@mui/material';
import { fetchProfile } from '../../services/service';
import { Profile as TypeProfile } from '../../types/apiTypes';
import { fileUrlFor, urlFor } from '../../services/sanityClient';
import TimelineInfoProfile from '../../components/widgets/profile/TimelineInfoProfile';
import ModalDialogQR from '../../components/widgets/profile/ModalDialogQR';
import { useFetchData } from '../../hooks/useFetchData';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CustomProfileLoader } from '../../components/common/ContentLoader/MainLoader';
import { saveAs } from 'file-saver';

const Profile: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { data: profile, loading } = useFetchData<TypeProfile>(fetchProfile, "profile", {} as TypeProfile);

    const profileLinks = profile?.links?.map(link => ({
        name: link.name.toLowerCase(),
        link: link
    })) || [];

    const profileInfo = profile?.infos?.map(info => ({
        name: info.name.toLowerCase(),
        info: info
    })) || [];

    const handleDownloadCV = () => {
        if (profile?.cv?.asset) {
            const cvUrl = fileUrlFor(profile.cv);
            saveAs(cvUrl, 'AyoubChaibaResume.pdf');
        }
    };

    return (
        <div className="profile container_shadow">
            {loading ? (
                <CustomProfileLoader />
            ) : (
                profile && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="profile_name">
                            <Box>
                                <Typography className='name'>{profile.fullName}</Typography>
                                <Typography className='job'>{profile.job}</Typography>
                            </Box>
                            <MainButton icon={<FaQrcode />} className={'btn-qr'} handleClick={() => setOpen(true)} />
                        </div>
                        <figure>
                            <LazyLoadImage
                                src={urlFor(profile.photo.asset).url()}
                                alt="Avatar"
                                effect="blur"
                                width="100%"
                                height="auto"
                                className='image-profile'
                            />
                        </figure>
                        <div className='profile_info'>
                            <div className='timeline_info'>
                                <CustomTimeline icon={<FaCircleUser />}
                                    style={{
                                        sizeIcon: 45,
                                        marginLeft: -19,
                                        headIconTop: "-24px",
                                    }}
                                    className='timeline_profile'
                                >
                                    {profileInfo.map(info => (
                                        <TimelineInfoProfile key={info.name} title={info.name} text={info.info.value} />
                                    ))}
                                    {profileLinks.map(link => (
                                        <TimelineInfoProfile key={link.name} title={link.name} link={link.link} />
                                    ))}
                                </CustomTimeline>
                            </div>
                            <div className='btn_resume'>
                                <MainButton text="Download CV" icon={<FaDownload />} handleClick={handleDownloadCV} />
                            </div>
                        </div>
                        <ModalDialogQR
                            open={open}
                            onClose={() => setOpen(false)}
                            link={profile.link_qr}
                        />
                    </motion.div>
                )
            )}
        </div>
    );
};

export default Profile;
