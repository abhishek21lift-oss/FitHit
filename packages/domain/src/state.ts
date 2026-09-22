export type ConsentState="active"|"revoked";
export type AssessmentState="draft"|"signed"|"amended";
export function canSignAssessment(state:AssessmentState){return state==="draft";}
export function nextConsentState(_current:ConsentState,action:"grant"|"revoke"):ConsentState{return action==="grant"?"active":"revoked";}