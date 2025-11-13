import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whychooseus',
  title: 'Why choose us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'textcard',
      title: 'Text Card',
      type: 'textCard',
    }),
    defineField({
      name: 'textcardarray',
      title: 'Text Card',
      type: 'array',
      of: [{ type: 'textCard' }],
    }),
  ],
});
