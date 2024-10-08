import ContentGrid from "../../components/widgets/GridContent/ContentGrid";
import TextWithSpaces from "../../components/common/text/TextWithSpaces";
import "./contact.scss";
import { Container } from '@mui/material';
import FormContact from "../../components/common/form/FormContact";

const Contact = () => {
    return (
        <main>
            <ContentGrid title="Get in touch" classContent="contact-text" updateNull={true}>
                <TextWithSpaces text="Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 📞." />
            </ContentGrid>
            <ContentGrid title="Connect with me" classContent="contact-form" updateNull={true}>
                <Container maxWidth="md" className="contact-container"
                    sx={{
                        padding: { xs : 0, md: 2, lg: 3 }
                    }}
                    >
                    <FormContact />
                </Container>
            </ContentGrid>
        </main>
    );
}

export default Contact;
