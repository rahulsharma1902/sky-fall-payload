const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

const API_BASE = `${BASE_URL}/api`

export const API_URL = {
  GET_ALL_BLOGS: `${API_BASE}/blogs`,
  GET_BLOGS_SETTINGS: `${API_BASE}/globals/blog-settings`,

  GET_ALL_CATEGORIES: `${API_BASE}/categories`,
}
