import {defineType, defineField, defineArrayMember} from 'sanity'

export const someDocumentType = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'strings',
      name: 'strings',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
})
