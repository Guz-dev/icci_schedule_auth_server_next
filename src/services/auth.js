import Jwt from "jsonwebtoken"

export const get_tokens = () => {
  return tokens
}

export const generateToken = (email,password) => {
  console.log("Generating token")
  const token = Jwt.sign({email,password},process.env.NEXT_PUBLIC_SECRET_MIDDLEWARE_KEY,{expiresIn:"30d"})
  return token
}
    
export const verifyToken = (token) => {
  return Jwt.verify(token,process.env.NEXT_PUBLIC_SECRET_AUTH_KEY)
}

export const verifySessionToken = (token) => {
  return Jwt.verify(token,process.env.NEXT_PUBLIC_SECRET_MIDDLEWARE_KEY)
}