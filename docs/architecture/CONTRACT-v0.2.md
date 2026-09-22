# Health Collaboration OS — Architecture & Domain Contract v0.2

Frozen: person-centric health data; hybrid B2B+B2C; self-signup + professional invitation; 18+ MVP; consent-first authorization; RBAC + relationship + consent + ABAC; PostgreSQL RLS; private professional notes as a separate security classification; AI Context Broker + task registry; human approval/sign gates; timeline projection; modular monolith + worker + outbox.

Deployment: Vercel + Supabase PostgreSQL/Auth/Storage + Render API/worker + OpenRouter AI.

MVP spine: invite → consent → assessment/note → plan → timeline → AI summary → handoff → revoke → access log.
