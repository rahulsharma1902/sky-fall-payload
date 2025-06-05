// // src/endpoints/uploadToSupabase.ts
// import type { Endpoint } from 'payload'

// import type { Request, Response } from 'express'
// import { createClient } from '@supabase/supabase-js'

// // Initialize Supabase client with env variables
// const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_ANON_KEY || '')

// export const uploadToSupabase: Endpoint = {
//   path: '/upload-supabase',
//   method: 'post',
//   handler: async (req) => {
//     // express-fileupload puts uploaded files in req.files
//     const file = (!req.files)

//     if (!file) {
//       return res.status(400).json({ error: 'No file uploaded' })
//     }

//     // file.data is a Buffer
//     const buffer: Buffer = file.data
//     // Create a unique file path in your Supabase bucket
//     const filePath = `storage/${Date.now()}-${file.name}`

//     const { error } = await supabase.storage
//       .from('storage') // your bucket name
//       .upload(filePath, buffer, {
//         contentType: file.mimetype,
//         upsert: true,
//       })

//     if (error) {
//       return res.status(500).json({ error: 'Upload failed', details: error.message })
//     }

//     // Get the public URL of the uploaded file
//     const { data } = supabase.storage.from('storage').getPublicUrl(filePath)

//     return res.status(200).json({ url: data.publicUrl })
//   },
// }
