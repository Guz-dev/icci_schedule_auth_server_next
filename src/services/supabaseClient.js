import { createClient } from '@supabase/supabase-js'

export async function user_login(email, password) {
  console.log("LOGGING IN: "+ email,password)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
  try{
    const supabase = createClient(supabaseUrl, supabaseKey)


    const { data } = await supabase.from('users').select('*').eq('email', email).eq('password', password).single()
    
    console.log(data)
    
    if (data) {
      console.log("User found")
      return true
    } else {
      console.log("User not found")
      return false
    }
  } catch {
    return false
  }
}