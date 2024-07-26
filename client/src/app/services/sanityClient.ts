import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Asset, File } from '../types/apiTypes';

export const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Asset) => {
    return builder.image(source);
};

export function fileUrlFor(source: File) {
    const [assetId, extension] = source.asset._ref.split('-').slice(1);
    return `https://cdn.sanity.io/files/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${assetId}.${extension}`;
}
