import { client } from './sanityClient';
import { Profile, Services, Skills } from './types';

export const fetchProfile = async (type: string): Promise<Profile> => {
    const query = `*[_type == "${type}"][0]`;
    return client.fetch(query);
};

export const fetchService = async (type: string): Promise<Services> => {
    const query = `*[_type == "${type}"]`;
    return client.fetch(query);
};

export const fetchSkills = async (type: string): Promise<Skills> => {
    const query = `*[_type == "${type}"]`;
    return client.fetch(query);
};



