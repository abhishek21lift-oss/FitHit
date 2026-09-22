import {z} from "zod";
export const ageGateSchema=z.object({dateOfBirth:z.coerce.date()}).superRefine(({dateOfBirth},ctx)=>{
 const now=new Date(); const cutoff=new Date(now.getFullYear()-18,now.getMonth(),now.getDate());
 if(dateOfBirth>cutoff) ctx.addIssue({code:"custom",message:"FitHit MVP requires the user to be 18 or older",path:["dateOfBirth"]});
});