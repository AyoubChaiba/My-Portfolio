import { client } from './sanityClient';
import { Profile, Services, Skills, Working, Educations, Clients, Projects } from './types';

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

export const fetchWorking = async (type: string): Promise<Working> => {
    const query = `*[_type == "${type}"][0]`;
    return client.fetch(query);
};

export const fetchEducations = async (type: string): Promise<Educations> => {
    const query = `*[_type == "${type}"][0]`;
    return client.fetch(query);
};

export const fetchClients = async (type: string): Promise<Clients> => {
    const query = `*[_type == "${type}"]`;
    return client.fetch(query);
};

export const fetchProjects = async (type: string): Promise<Projects> => {
    const query = `*[_type == "${type}"]`;
    return client.fetch(query);
};



