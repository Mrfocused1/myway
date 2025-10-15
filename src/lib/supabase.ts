import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface MenuItemDB {
  id: string
  name: string
  description: string
  category: string
  cuisine: string
  allergens: string[]
  may_contain: string[]
  created_at: string
  updated_at: string
}

export interface CateringPackageDB {
  id: string
  name: string
  price: string
  description: string
  includes: string[]
  featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}
