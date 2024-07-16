import { client } from './sanityClient';
import { Profile, Services } from './types';

export const fetchProfile = async (type: string): Promise<Profile> => {
    const query = `*[_type == "${type}"][0]`;
    return client.fetch(query);
};

export const fetchService = async (type: string): Promise<Services> => {
    const query = `*[_type == "${type}"]`;
    return client.fetch(query);
};



