import { AppBar, Box, Toolbar, IconButton, List } from '@mui/material';
import "./header.scss";
import MainButton from '../widgets/Button/MainButton';
import { FaPaperPlane, FaHouse } from "react-icons/fa6";
import { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { CustomLink } from "../widgets/Button/customLink";
import SocialMedia from '../widgets/Button/socileMadia';



const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useClickAway(ref, () => setIsOpen(false));

    return (
        <>
            <AppBar position="static" className='header'>
                <Toolbar disableGutters className='navBar'>
                    <CustomLink to={`/`} icon={<FaHouse className='iconHome' />} className='btnHead btnHome' />
                    <Box className='navMenu' sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {['RESUME', 'PORTFOLIO', 'Stats', 'CONTACT'].map((page) => (
                            <CustomLink key={page} to={`/${page.toLowerCase()}`} text={page} />
                        ))}
                    </Box>
                    <List className='socile-icon'>
                        <SocialMedia />
                    </List>
                    <MainButton text='Hire Me' className='btn-nav' icon={<FaPaperPlane />} />
                    <IconButton
                        edge="start"
                        className='btnHead btnMenu'
                        color="inherit"
                        aria-label="menu"
                        aria-expanded={isOpen}
                        onClick={() => ref.current === null && setIsOpen(!isOpen)}
                        >
                        <Hamburger toggled={isOpen} size={21} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="menu"
                        ref={ref}
                    >
                        <List className="menuList">
                            {['RESUME', 'PORTFOLIO', 'Stats', 'CONTACT'].map((page, idx) => (
                                <motion.li
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1 + idx / 10,
                                    }}
                                    key={page}
                                    className="menuItem"
                                >
                                    <CustomLink key={page} to={`/${page.toLowerCase()}`} text={page} handleClick={() => setIsOpen(false)} className='menuLink' />
                                </motion.li>
                            ))}
                        </List>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
