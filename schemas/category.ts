import {defineType} from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  name: 'category',
  title: 'Category',
   initialValue: {
    description: null
  },
  icon: BookIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
})
