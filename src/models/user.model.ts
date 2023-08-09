import { z } from "@builder.io/qwik-city";

export const UserSchema = z.object({
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const emptyUserState: User = {
  name: "",
};
