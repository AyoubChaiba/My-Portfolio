import { defineField, defineType } from 'sanity';

export const socialMedia = defineType({
    name: 'socialMedia',
    title: 'Social Media',
    type: 'document',
    fields: [
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
        }),
        defineField({
            name: 'dev',
            title: 'Dev',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
        }),
    ],
});
