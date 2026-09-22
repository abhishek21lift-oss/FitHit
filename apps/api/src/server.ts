import Fastify from "fastify";
import rateLimit from "@fastify/rate-limit";
import { authRoutes } from "./routes/auth";
const app=Fastify({logger:true});
app.register(rateLimit,{global:false});
app.get("/health",async()=>({ok:true,service:"fithit-api",version:"0.2.0"}));
app.register(authRoutes);
const port=Number(process.env.API_PORT??4000);
app.listen({port,host:"0.0.0.0"}).catch(error=>{app.log.error(error);process.exit(1);});