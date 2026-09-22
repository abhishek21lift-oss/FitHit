import { z } from "zod";
export const registerSchema=z.object({email:z.string().email(),password:z.string().min(12),dateOfBirth:z.coerce.date(),displayName:z.string().trim().min(1).max(120)});
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(1)});
export function isAdult(dateOfBirth:Date,now=new Date()){const cutoff=new Date(now.getFullYear()-18,now.getMonth(),now.getDate());return dateOfBirth<=cutoff;}