import { z } from "zod";
import { userSchema, userSchemaRequest } from "../../schemas/user/schema";

export type user = z.infer<typeof userSchema>;
export type userRequest = z.infer<typeof userSchemaRequest>;
