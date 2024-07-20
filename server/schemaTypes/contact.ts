import { defineField, defineType } from 'sanity';

export const contact = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'YOUR_SERVICE_ID',
            title: 'Your service id',
            type: 'string',
        }),
        defineField({
            name: 'YOUR_TEMPLATE_ID',
            title: 'Your template id',
            type: 'string',
        }),
        defineField({
            name: 'YOUR_PUBLIC_KEY',
            title: 'Your public key',
            type: 'string',
        }),
    ],
});