import { FaFacebook, FaInstagram, FaDev, FaTwitter } from 'react-icons/fa';
import { Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { SocialProps } from '../../../types/apiTypes';
import { fetchSocial } from '../../../services/service';
import { useFetchData } from '../../../hooks/useFetchData';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const SocialMedia = () => {
    const { data: socialMediaData } = useFetchData(fetchSocial, "socialMedia", {} as SocialProps);

    const socialMedia: { name: 'facebook' | 'instagram' | 'dev' | 'twitter', icon: JSX.Element }[] = [
        { name: 'facebook', icon: <FaFacebook /> },
        { name: 'instagram', icon: <FaInstagram /> },
        { name: 'dev', icon: <FaDev /> },
        { name: 'twitter', icon: <FaTwitter /> },
    ];


    return (
        <>
            {socialMediaData && socialMedia.filter((item) => socialMediaData && socialMediaData[item.name]).map((item, index) => (
                <motion.li
                    key={item.name}
                    className='social-media-item'
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <MuiLink
                        href={socialMediaData![item.name]}
                        target='_blank'
                        rel="noopener noreferrer"
                        color="inherit"
                    >
                        {item.icon}
                    </MuiLink>
                </motion.li>
            ))}
        </>
    );
};

export default SocialMedia;
