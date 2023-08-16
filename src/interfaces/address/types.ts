import { z } from "zod";
import {
  addressSchema,
  addressSchemaRequest,
} from "../../schemas/address/schema";

export type Address = z.infer<typeof addressSchema>;
export type AddressRequest = z.infer<typeof addressSchemaRequest>;
