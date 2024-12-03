import { z } from "zod";
import validator from "validator";

export const profile_form = z.object({
  name: z.string().min(0).max(50),
  username: z.string().min(0).max(50),
  password: z.string().min(0).max(50),
  birthdate: z.string().min(0).max(50),
  number: z.string().min(0).max(50),
  address: z.string().min(0).max(50),
});
