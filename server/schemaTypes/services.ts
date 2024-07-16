import { defineField, defineType } from 'sanity';

export const services = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            title: 'Service Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
});
