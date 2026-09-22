import {decideHealthRead,type AccessPurpose,type AccessDecision} from "@fithit/domain";
export {decideHealthRead};
export type {AccessPurpose,AccessDecision};
export function canReadHealth(ctx:{authenticated:boolean;activeMembership:boolean;hasGrant:boolean;purpose?:AccessPurpose}){return decideHealthRead({authenticated:ctx.authenticated,activeMembership:ctx.activeMembership,effectiveGrant:ctx.hasGrant,purpose:ctx.purpose}).allowed;}