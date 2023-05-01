import { generateToken, verifyToken } from '@/services/auth'
import { user_login } from '@/services/supabaseClient'
import NextCors from 'nextjs-cors'



export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: `https://${process.env.PAGE_ADDRESS}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = verifyToken(req.body.token)
  console.log(data)

  if (user_login(data.email, data.password) == true){
    console.log("User is authenticated")
    const token = generateToken(req.body.email, req.body.password)
    res.send( { token } )
  } else {
    console.log("User is not authenticated")
    res.send( { token: null })
  } 

}
  