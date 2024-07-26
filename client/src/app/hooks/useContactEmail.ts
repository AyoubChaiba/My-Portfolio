import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchContact } from '../services/service';
import { Contact } from '../types/apiTypes';

const useContactEmail = () => {
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

    return contactEmail;
};

export default useContactEmail;
