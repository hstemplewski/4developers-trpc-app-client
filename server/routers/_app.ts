import { procedure, router } from "../trpc";

export const appRouter = router({
  hello: procedure.query(() => "Hello!"),
});

export type AppRouter = typeof appRouter;
