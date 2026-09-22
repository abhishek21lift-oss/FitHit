# Security Invariants

- Health reads require authenticated principal, active membership, effective AccessGrant and purpose.
- Person is sole grantor/revoker of consent.
- Organization roles never become health ACLs.
- clinical_private data is author-only.
- Private notes are excluded from shared timeline and handoff manifests.
- AI receives only an approved AIContext and never database credentials/tools.
- AI-generated authoritative records require human approval/sign.
- Revoked consent/membership denies subsequent requests within the bounded target.
- Audit records are immutable.
- Cross-person identifiers return 404.
- Notifications contain pointers, not health bodies.
- Tokens are never logged.
- Break-glass requires reason, TTL and notification.
- Exports exclude professional-private data by default.
- Logs/traces contain no health payloads.
- Unknown task/category/purpose is denied.
