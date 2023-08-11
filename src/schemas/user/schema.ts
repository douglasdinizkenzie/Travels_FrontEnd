import { z } from "zod";

export const userSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Must be a valid email"),
  cpf: z
    .string()
    .min(1, "CPF is required")
    .max(14, "Maximum number of characters is 14"),
  phone: z.string().max(120, "Maximum number of characters is 120").nullish(),
  date_of_birth: z.string().max(12),
  description: z.string().nullish(),
});

export const userSchemaRequest = userSchema
  .omit({
    uuid: true,
  })
  .extend({
    cep: z.string().max(8, "Maximum number of characters is 8"),
    state: z.string().max(4, "Maximum number of characters is 4"),
    city: z.string().max(50, "Maximum number of characters is 50"),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "One special character"
      )
      .min(8, "Must be at least 8 characters in length"),
    confirmPassword: z.string(),
  });
