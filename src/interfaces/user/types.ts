import { z } from "zod";
import { userSchema, userSchemaRequest } from "../../schemas/user/schema";

export type User = z.infer<typeof userSchema>;
export type UserRequest = z.infer<typeof userSchemaRequest>;
