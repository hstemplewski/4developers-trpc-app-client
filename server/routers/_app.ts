import { procedure, router } from "../trpc";
import { userRouter } from "./user";

export const appRouter = router({
  hello: procedure.query(() => "Hello!"),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
