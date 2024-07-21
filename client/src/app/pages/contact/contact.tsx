import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import { TextWithSpaces } from "../../components/widgets/Content/TextWithSpaces";
import "./contact.scss";
import { Container } from '@mui/material';
import FormContact from "../../components/common/form/FormContact";

const Contact = () => {
    return (
        <main>
            <ContentGrid title="Get in touch" classContent="contact-text">
                <TextWithSpaces text="Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 📞." />
            </ContentGrid>
            <ContentGrid title="Connect with me" classContent="contact-form">
                <Container maxWidth="md" className="contact-container">
                    <FormContact />
                </Container>
            </ContentGrid>
        </main>
    );
}

export default Contact;
