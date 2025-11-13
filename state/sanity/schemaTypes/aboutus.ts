import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutus',
  title: 'About Us',
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
      title: 'Primary Card',
      type: 'array',
      of: [{type: "primaryCard"}]
    }),
   
  ],
});
