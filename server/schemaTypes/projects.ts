import { defineField, defineType } from 'sanity';

export const projects = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web Dev', value: 'Web Dev' },
                    { title: 'Web Design', value: 'Web Design' },
                    { title: 'Mobile Dev', value: 'Mobile Dev' }
                ],
                layout: 'dropdown',
            }
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'array',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'stack',
            title: 'Stack',
            type: 'string',
        }),
        defineField({
            name: 'github',
            title: 'Github',
            type: 'url',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
    ],
});
