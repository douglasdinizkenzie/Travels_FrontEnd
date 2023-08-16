import { z } from "zod";
import { userSchema } from "../user/schema";

export const addressSchema = z.object({
  uuid: z.string().uuid(),
  cep: z.string().max(8),
  state: z.string().max(4),
  city: z.string().max(50),
  user_uuid: z.string(),
  user: userSchema.nullish(),
});

export const addressSchemaRequest = addressSchema.omit({
  uuid: true,
  user_uuid: true,
  user: true,
});
