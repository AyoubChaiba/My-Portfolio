import MainButton from "../../components/widgets/Button/MainButton";
import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/Content/TextWithSpaces";
import "./contact.scss";
import { Container, TextField, Grid } from '@mui/material';
import { FaPaperPlane } from "react-icons/fa6";


const Contact = () => {

    return (
        <main>
            <ContentGrid title={'Get in touch'} classContent={'contact-text'}>
                <TextWithSpaces text={"Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 📞."} />
            </ContentGrid>
            <ContentGrid title={'Connect with me'} classContent={'contact-form'}>
                <Container maxWidth="md" className="contact-container">
                    <form className="contact-form">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            label="First name"
                            variant="outlined"
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last name"
                            variant="outlined"
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="Email address"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="Subject"
                            variant="outlined"
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <MainButton
                            text="Send"
                            className="btn-send"
                            handleClick={() => window.open('#')}
                            icon={<FaPaperPlane />}
                        />
                        </Grid>
                    </Grid>
                    </form>
                </Container>
            </ContentGrid>
        </main>
    );
}

export default Contact;
