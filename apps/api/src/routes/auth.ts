import type { FastifyInstance } from "fastify";
import { loginSchema, registerSchema, isAdult } from "../auth";
export async function authRoutes(app:FastifyInstance){
 app.post("/v1/auth/register",{config:{rateLimit:{max:5,timeWindow:"15 minutes"}}},async(req,reply)=>{
  const input=registerSchema.parse(req.body);
  if(!isAdult(input.dateOfBirth)) return reply.code(400).send({error:"AGE_GATE"});
  return reply.code(501).send({error:"AUTH_PROVIDER_WIRING_PENDING"});
 });
 app.post("/v1/auth/login",{config:{rateLimit:{max:10,timeWindow:"15 minutes"}}},async(req,reply)=>{
  loginSchema.parse(req.body); return reply.code(501).send({error:"AUTH_PROVIDER_WIRING_PENDING"});
 });
}