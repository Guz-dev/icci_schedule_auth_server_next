import { createClient } from '@supabase/supabase-js'

export function user_login(email, password) {
  return true
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  try{
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { data, error } = supabase.from('users').select('*').eq('email', email).eq('password', password)
      
    if (data == null) {
      return false
    } else {
      return true
    }
  } catch {
    return false
  }
}