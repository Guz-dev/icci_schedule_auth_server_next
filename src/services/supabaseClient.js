import { createClient } from '@supabase/supabase-js'

export async function user_login(email, password) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
  try{
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    const { data, error } = await supabase.from('users').select('*').eq('email', email).eq('password', password)
    
    if (data == null) {
      console.log("User not found")
      return false
    } else {
      console.log("User found")
      return true
    }
  } catch {
    return false
  }
}