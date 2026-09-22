export type WorkerHealth = { ok: true; service: "fithit-worker"; version: string };

export function workerHealth(version = "0.1.0"): WorkerHealth {
  return { ok: true, service: "fithit-worker", version };
}

if (process.env.NODE_ENV !== "test") {
  void workerHealth();
}
