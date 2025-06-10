import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blog } from './collections/Blog'
import { Category } from './collections/Category'
import blogSettings from './collections/globals/blogSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [Users, Media, Blog, Category],
  globals: [blogSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      // url: process.env.DATABASE_URL || 'file:./payload.db',
      url: process.env.DATABASE_URL || 'file:./payload.db',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
