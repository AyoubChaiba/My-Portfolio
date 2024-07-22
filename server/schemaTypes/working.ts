import { defineField, defineType } from 'sanity';

export const working = defineType({
    name: 'working',
    title: 'Working',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'work',
            title: 'Work',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'position',
                            title: 'Position',
                            type: 'string',
                        }),
                        defineField({
                            name: 'company',
                            title: 'Company',
                            type: 'string',
                        }),
                        defineField({
                            name: 'dates',
                            title: 'Dates',
                            type: 'string',
                        }),
                        defineField({
                            name: 'location',
                            title: 'Location',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
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
                },
            ],
        }),
    ],
});
