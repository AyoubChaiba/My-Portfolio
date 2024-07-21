import Typography from '@mui/material/Typography';
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className='name'>
                <Typography  className='name-text'>Ayoub Chaiba</Typography>
            </div>
            <div className="copyright">
                <Typography className="copyright-text" fontSize={12} >© All rights reserved. Designed by <a href="https://github.com/AyoubChaiba">Ayoub Chaiba</a></Typography>
            </div>
        </footer>
    );
}

export default Footer;
