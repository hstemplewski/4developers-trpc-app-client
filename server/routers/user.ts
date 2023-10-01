import { z } from "zod";
import { procedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  create: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .output(
      z.object({
        message: z.string(),
        data: z.number().nullish(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const createdUser = await ctx.prisma.user.create({
          data: input,
        });

        return {
          message: "User has been created",
          data: createdUser.id,
        };
      } catch (err) {
        return {
          message: "We got an error",
          data: null,
        };
      }
    }),
  getAll: procedure
    .output(z.array(z.object({ id: z.number(), name: z.string() })))
    .query(async ({ ctx }) => {
      try {
        const users = await ctx.prisma.user.findMany({});

        return users;
      } catch (err) {
        throw new TRPCError({
          message: "ERROR",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
});
