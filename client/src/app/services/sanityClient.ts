import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Asset } from '../types/apiTypes';

export const client = sanityClient({
    projectId: 'fsmqol3o',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Asset) => {
    return builder.image(source);
};
