import { defineField, defineType } from 'sanity';

export const certifications = defineType({
    name: 'certifications',
    title: 'Certifications',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'issuer',
            title: 'Issuer',
            type: 'string',
        }),
        defineField({
            name: 'dates',
            title: 'Date',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        })
    ],
});
