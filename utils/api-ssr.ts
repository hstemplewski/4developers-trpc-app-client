import { createContext } from "@/server/context";
import { appRouter } from "@/server/routers/_app";
import { createServerSideHelpers } from "@trpc/react-query/server";

export const apiSSR = createServerSideHelpers({
  router: appRouter,
  ctx: await createContext(),
});
