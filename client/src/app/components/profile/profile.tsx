import { useEffect, useState, useRef } from 'react';
import CustomTimeline from '../widgets/Timeline/CustomTimeline';
import './profile.scss';
import MainButton from '../widgets/Button/MainButton';
import { FaDownload, FaCircleUser, FaQrcode } from "react-icons/fa6";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box, Typography } from '@mui/material';
import { fetchProfile } from '../../service';
import { Profile as ProfileType } from '../../types';
import { urlFor } from '../../sanityClient';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import TimelineInfoProfile from '../widgets/Timeline/TimelineInfoProfile';
import CustomProfileLoader from '../widgets/ContentLoader/ProfileContentLoader';

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<ProfileType | null>(null);
    const [open, setOpen] = useState(false);
    const qrRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getProfile = async () => {
            const data = await fetchProfile("profile");
            setProfile(data);
        };
        getProfile();
    }, []);

    const handleDownloadQRCode = () => {
        if (qrRef.current) {
            htmlToImage.toPng(qrRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'qr-code.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch(() => {
                    console.error('Failed to generate QR code image');
                });
        }
    };

    if (!profile) {
        return <div className="profile container_shadow"><CustomProfileLoader /></div>
    }

    const profileLinks = profile.links.map(link => {
        return {
            name: link.name.toLowerCase(),
            link: link
        };
    });
    const profileInfo = profile.infos.map(info => {
        return {
            name: info.name.toLowerCase(),
            info: info
        };
    });

    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Box>
                    <Typography className='name'>{profile.fullName}</Typography>
                    <Typography className='job'>{profile.job}</Typography>
                </Box>
                <MainButton icon={<FaQrcode />} className={'btn-qr'} handleClick={() => setOpen(true)} />
            </div>
            <figure>
                <img src={urlFor(profile.photo.asset).url()} alt="Avatar" />
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
                        {
                            profileInfo.map(info => <TimelineInfoProfile key={info.name} title={info.name} text={info.info.value} />)
                        }
                        {
                            profileLinks.map(link => <TimelineInfoProfile key={link.name} title={link.name} link={link.link} />)
                        }
                    </CustomTimeline>
                </div>
                <div className='btn_resume'>
                    <MainButton text="Download CV" icon={<FaDownload />} link={profile.url_cv} />
                </div>
            </div>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle align='center'>Share this page</DialogTitle>
                <DialogContent>
                    <div ref={qrRef}>
                        <QRCode value={profile.link_qr} />
                    </div>
                </DialogContent>
                <DialogActions sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                    <Button onClick={handleDownloadQRCode} color="primary">
                        Download
                    </Button>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Profile;

