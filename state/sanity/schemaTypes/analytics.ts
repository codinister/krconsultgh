import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'analytics',
  title: 'Analytics',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'primarycard',
      title: 'Primary Card',
      type: 'primaryCard',
    }),
    defineField({
      name: 'textcard',
      title: 'Text Card',
      type: 'textCard',
    }),
    defineField({
      name: 'headingcard',
      title: 'Heading Card',
      type: 'array',
      of: [{ type: 'headingCard' }],
    }),
  ],
});
