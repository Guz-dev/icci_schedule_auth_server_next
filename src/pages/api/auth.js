import { generateToken, verifyToken } from '@/services/auth'
import { user_login } from '@/services/supabaseClient'
import NextCors from 'nextjs-cors'



export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: `http://${process.env.PAGE_ADDRESS}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  console.log(req.body)
  console.log(verifyToken(req.body.token))

  if (user_login(req.body.email, req.body.password)){
    console.log("User is authenticated")
    const token = generateToken(req.body.email, req.body.password)
    res.send( { token } )
  } else {
    res.send( { token: null })
  } 

}
  