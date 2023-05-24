import { verifySessionToken  } from "@/services/auth"
import NextCors from "nextjs-cors"

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: `${process.env.PAGE_ADDRESS}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  console.log(req.body.token)

  const data = verifySessionToken(req.body.token)
  if (data){
    console.log("User is authenticated")
    res.send({ authenticated: true})
  } else {
    console.log("User expired") 
    res.send({ authenticated: false})
  }

}    
    