import { z } from "zod";

export const item_form = z.object({
  name: z.string().min(2).max(50),
  desc: z.string().min(2).max(250),
  size: z.string().min(1).max(50),
  price: z.string().min(2).max(50),
  image: z.string().min(2).max(50),
});
