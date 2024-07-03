import { Button, Box, AppBar, Toolbar } from '@mui/material';
import "./header.scss"
import MainButton from '../button/MainButton';
import { FaPaperPlane, FaHouse, FaBars } from "react-icons/fa6";


const pages = ['RESUME', 'PORTFOLIO', 'CONTACT'];

const Header = () => {
    return (
        <AppBar position="static" className='header'>
            <Toolbar disableGutters className='navBar' >
                <Button className={'btnHead btnHome'} >
                    <FaHouse className='iconHome' />
                </Button>
                <Box className='navMenu' >
                    { pages.map((page) => (
                        <Button key={page}>{page}</Button>
                    )) }
                </Box>
                <MainButton text='Hire Me' className='btn-nav' icon={<FaPaperPlane />} />
                <Button className={'btnHead btnMenu'}  >
                    <FaBars className='iconHome' />
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
