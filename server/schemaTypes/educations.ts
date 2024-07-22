import { defineField, defineType } from 'sanity';

export const educations = defineType({
    name: 'educations',
    title: 'Educations',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'degree',
                            title: 'Degree',
                            type: 'string',
                        }),
                        defineField({
                            name: 'institution',
                            title: 'Institution',
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
