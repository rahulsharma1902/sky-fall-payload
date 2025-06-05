import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'mobile',
        width: 343,
        height: 156,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 720,
        height: 320,
        position: 'centre',
      },
      {
        name: 'desktop',
        width: 1272,
        height: 546,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
