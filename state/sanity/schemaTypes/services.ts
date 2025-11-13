import { defineField, defineType } from 'sanity';

export default defineType({
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
      name: 'textcard',
      title: 'Text Card',
      type: 'textCard',
    }),
    defineField({
      name: 'primarycard',
      title: 'Text Card',
      type: 'array',
      of: [{type: "textCard"}]
    }),
   
  ],
});
