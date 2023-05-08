import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'personal-site',

  projectId: '5a3auag5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
