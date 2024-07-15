import { client } from './sanityClient';
import { Profile } from './types';

export const fetchProfile = async (): Promise<Profile> => {
    const query = '*[_type == "profile"][0]';
    return client.fetch(query);
};
