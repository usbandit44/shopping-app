import { number, z } from "zod";
import validator from "validator";

export const signin_form = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const signup_form = z.object({
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  birthdate: z.string().date(),
  number: z.string().refine(validator.isMobilePhone),
  address: z.string().min(2).max(50),
});
