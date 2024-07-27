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
                    { title: 'Web Dev', value: 'web-dev' },
                    { title: 'Web Design', value: 'web-design' },
                    { title: 'Mobile Dev', value: 'mobile-dev' }
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
            of: [
                {
                    type: 'image',
                    fields: [
                        defineField({
                            name: 'width',
                            title: 'Width',
                            type: 'number',
                        }),
                        defineField({
                            name: 'height',
                            title: 'Height',
                            type: 'number',
                        }),
                    ]
                }
            ]
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
