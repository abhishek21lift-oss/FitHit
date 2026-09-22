import type { FastifyInstance } from "fastify";
import { loginSchema, registerSchema, isAdult } from "../auth";

export async function authRoutes(app: FastifyInstance) {
  app.post("/v1/auth/register", {
    config: { rateLimit: { max: 5, timeWindow: "15 minutes" } },
  }, async (req, reply) => {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ error: "INVALID_REQUEST" });
    if (!isAdult(parsed.data.dateOfBirth)) return reply.code(400).send({ error: "AGE_GATE" });
    return reply.code(501).send({ error: "AUTH_PROVIDER_WIRING_PENDING" });
  });

  app.post("/v1/auth/login", {
    config: { rateLimit: { max: 10, timeWindow: "15 minutes" } },
  }, async (req, reply) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ error: "INVALID_REQUEST" });
    return reply.code(501).send({ error: "AUTH_PROVIDER_WIRING_PENDING" });
  });
}