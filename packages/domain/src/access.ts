export type AccessPurpose="care"|"handoff"|"ai_assistance";
export type AccessDecision={allowed:boolean;reason:"ALLOW"|"UNAUTHENTICATED"|"NO_MEMBERSHIP"|"NO_GRANT"|"NO_PURPOSE"};
export function decideHealthRead(input:{authenticated:boolean;activeMembership:boolean;effectiveGrant:boolean;purpose?:AccessPurpose}):AccessDecision{
 if(!input.authenticated)return{allowed:false,reason:"UNAUTHENTICATED"};
 if(!input.activeMembership)return{allowed:false,reason:"NO_MEMBERSHIP"};
 if(!input.effectiveGrant)return{allowed:false,reason:"NO_GRANT"};
 if(!input.purpose)return{allowed:false,reason:"NO_PURPOSE"};
 return{allowed:true,reason:"ALLOW"};
}