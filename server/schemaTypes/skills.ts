import { defineField, defineType } from 'sanity';

export const skills = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Skills Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
});
