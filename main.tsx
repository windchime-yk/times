import { Hono } from "hono";
import { TopPage } from "~/routes/index.tsx";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.html(<TopPage />);
});

Deno.serve(app.fetch);
