import { number, z } from "zod";
import validator from "validator";

export const signin_form = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  user: z.enum(["buyer", "seller"]),
});

export const signup_form = z.object({
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  birthdate: z.string().min(2).max(50),
  number: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  user: z.enum(["buyer", "seller"]),
});
