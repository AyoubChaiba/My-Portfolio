import { Grid, TextField } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa6";
import MainButton from "../Button/MainButton.tsx";
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { fetchContact } from "../../../service.ts";
import { Contact } from "../../../types/index.ts";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormContact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [contactEmail, setContactEmail] = useState<Contact | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const dataContact = await fetchContact("contact");
                setContactEmail(dataContact || {});
            } catch (error) {
                console.error("Error fetching data");
                toast.error("Failed to fetch contact details.");
            }
        };
        fetchDataAsync();
    }, []);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current && contactEmail) {
            emailjs.sendForm(contactEmail.YOUR_SERVICE_ID, contactEmail.YOUR_TEMPLATE_ID, form.current, contactEmail.YOUR_PUBLIC_KEY)
                .then(() => {
                    toast.success("Email sent successfully!");
                }, () => {
                    toast.error("Failed to send email.");
                });
        }
    };

    return (
        <>
            <ToastContainer />
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First name"
                            variant="outlined"
                            fullWidth
                            required
                            type="text"
                            name="firstName"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            required
                            type="text"
                            name="lastName"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email address"
                            variant="outlined"
                            fullWidth
                            required
                            type="email"
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Subject"
                            variant="outlined"
                            fullWidth
                            required
                            type="text"
                            name="subject"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            name="message"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MainButton
                            text="Send"
                            className="btn-send"
                            type="submit"
                            icon={<FaPaperPlane />}
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default FormContact;
